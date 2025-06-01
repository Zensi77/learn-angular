import { createReducer } from '@ngrx/store';
import { CounterModel } from './counter.model';

const initialState: CounterModel = {
  count: 0,
  text: 'Counter',
  logs: [],
};

export const counterReducer = createReducer(initialState);
