export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Juan Perez",
  children: ["Laura", "Diego"],
};

const passenger2: Passenger = {
  name: "Maria Lopez",
};

const printChildren = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0; // Optional chaining
  const howManyChildren2 = passenger.children!.length; // Esto le dice a TS que confiamos en que children no es undefined
  console.log(howManyChildren);

  return howManyChildren2;
};

printChildren(passenger1); // 2
printChildren(passenger2); // 0
