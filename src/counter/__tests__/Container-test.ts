import {ActionDispatcher} from "../Container";
import {assert} from "chai";
import {spy} from "sinon";
import {increment, decrement} from '../module';

describe('DispatchActions', () => {

  it('increment',  () => {
    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);
    actions.increment(100);
    assert(spyCB.calledOnce);
    assert(spyCB.calledWith(increment(100)));
  });

  it('decrement',  () => {
    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);
    actions.decrement(10);
    assert(spyCB.calledOnce);
    assert(spyCB.calledWith(decrement(10)));
  });
});