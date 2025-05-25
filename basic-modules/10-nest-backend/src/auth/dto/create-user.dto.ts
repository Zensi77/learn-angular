import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail() // Class validator
  email: string;

  @IsString()
  name: string;

  @MinLength(6)
  password: string;
}
