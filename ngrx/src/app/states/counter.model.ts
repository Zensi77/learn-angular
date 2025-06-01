export interface CounterModel {
  count: number;
  text: string;
  logs: Log[];
}

export interface Log {
  date: string;
  message: string;
}
