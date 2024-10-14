export enum Color {
  'red',
  'green',
  'black',
  'blue',
  'yellow',
  'white',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
