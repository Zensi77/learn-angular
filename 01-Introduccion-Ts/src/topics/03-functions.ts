function addNumber(a: number, b: number) {
  return a + b;
}

const sum: string = addNumber(2, 3).toString();

console.log(sum);

interface Personaje {
  nombre: string;
  vida: number;
  showVida: () => void;
}

function curar(personaje: Personaje, curarX: number): void {
  personaje.vida += curarX;
  console.log(personaje.vida);
}

const nuevoPersonaje: Personaje = {
  nombre: "Juan",
  vida: 50,
  showVida() {
    console.log(this.vida);
  },
};
