import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcryptjs';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './entities/login-response';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>, // Inyectar el modelo User de la colección users
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...userData } = createUserDto;

      const newUser = new this.userModel({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      await newUser.save();

      const { password: _, ...user } = newUser.toObject(); // Eliminar la propiedad password del objeto user
      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Email already exists');
      }
      throw new InternalServerErrorException('Ha petado el servidor');
    }
  }

  async register(registerUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto);

    return {
      user,
      token: this.getJwtToken({ id: user._id }),
    };
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...rest } = user.toObject();

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string) {
    const { password: _, ...user } = await this.userModel.findById(id);
    return user;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload) {
    console.log(payload);

    const token = this.jwtService.sign(payload); // Aquí se utiliza el JwtService
    return token;
  }
}
