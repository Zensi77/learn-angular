class Person {
  public name?: string;
  public age?: number;
  private address?: string;

  constructor(name: string, age: number, addres?: string) {
    this.name = name;
    this.age = age;
    if (addres) {
      this.address = addres;
    }
  }
}

export class Persona {
  constructor(
    public name: string,
    public age?: number,
    private address: string = "No tiene direccion"
  ) {}
}

// export class Hero extends Persona {
//   constructor(
//     public superPower: string,
//     public realName: string,
//     name: string,
//     age?: number,
//     address: string = "No tiene direccion"
//   ) {
//     super(name, age, address);
//   }
// }

const person1 = new Person("Juan", 30);
console.log(person1.name);

// Composicion sobre herencia
export class Hero {
  constructor(
    public superPower: string,
    public realName: string,
    public persona: Persona
  ) {}
}

const persona1 = new Persona("Juan", 30);
const hero1 = new Hero("Volar", "Juan", persona1);
