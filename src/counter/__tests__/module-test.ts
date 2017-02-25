import reducer, {CounterState, increment, decrement} from "../module";
import {assert} from "chai";

describe('Reducer', () => {
  it('increment', () => {
    const state: CounterState = {num: 4};
    const result = reducer(state, increment(3));
    assert.deepEqual(result.num, state.num + 3);
  });

  it('decrement', () => {
    const state: CounterState = {num: 4};
    const result = reducer(state, decrement(3));
    assert.deepEqual(result.num, state.num - 3);
  });
});