import {Action} from 'redux';

type Actions = IncrementAction | DecrementAction;

export interface IncrementAction extends Action {
  type: 'counter/increment';
  amount: number;
}
export const increment = (num: number): IncrementAction => ({
  type: 'counter/increment',
  amount: num
});

export interface DecrementAction extends Action {
  type: 'counter/decrement';
  amount: number;
}
export const decrement = (num: number): DecrementAction => ({
  type: 'counter/decrement',
  amount: num
});

export interface CounterState {
  num: number;
}

const initialState:CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: Actions): CounterState {
  switch (action.type) {
    case 'counter/increment':
      return {num: state.num + action.amount};
    case 'counter/decrement':
      return {num: state.num - action.amount};
    default:
      return state
  }
}