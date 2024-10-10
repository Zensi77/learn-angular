let skills = ["JavaScript", "TypeScript", "Angular", 123, true];

// let skills2: string[] = ["JavaScript", "TypeScript", "Angular", 123, true];

interface Person {
  // Para tipar un objeto
  name: string;
  age: number;
  isDeveloper: boolean;
  skills: string[];
  hometown?: string; // Propiedad opcional
}

const desarrollador: Person = {
  name: "Juan",
  age: 30,
  isDeveloper: true,
  skills: ["JavaScript", "TypeScript", "Angular"],
};

desarrollador.hometown = "Madrid";

console.log(desarrollador);
