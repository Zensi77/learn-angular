interface AudioPlayer {
  volume: number;
  second: number;
  song: string;
  details: {
    author: string;
    year: number;
  };
}

const player: AudioPlayer = {
  volume: 90,
  second: 36,
  song: "La Incondicional",
  details: {
    author: "Luis Miguel",
    year: 1989,
  },
};

// Forma 1
const { details } = player;
const { author: autor } = details;

// Forma 2
const { author } = player.details;

console.log(autor);

// Destructuracion de arrays
const skills = ["JavaScript", "TypeScript", "Angular"];
const skill3 = skills[2] || "No hay skill"; // si no existe la posicion 2, se asigna el valor "No hay skill"
const [skill1, skill2] = skills; // Se asigna el valor de la posicion 0 a skill1 y el valor de la posicion 1 a skill2

// Spread Operator
const newSkills = ["React", "NodeJS", ...skills]; // Se añaden los valores de skills al array newSkills
const copySkills = [...skills]; // Se copian los valores de skills al array copySkills

export {};
