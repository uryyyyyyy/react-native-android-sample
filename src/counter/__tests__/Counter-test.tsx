import * as React from 'react';
import {assert} from "chai";
import {shallow, ShallowWrapper} from 'enzyme';
import {Counter} from '../Counter';
import {spy} from "sinon";
import {CounterState} from '../module';

describe('Counter', () => {

  it('rendering', () => {
    const actions:any = {};
    const state: CounterState = {num: 1};
    const wrapper: ShallowWrapper<CounterState, {}> = shallow(
      <Counter value={state} actions={actions} />
    );

    const text = wrapper.find('Text').at(0).prop('children');
    assert.deepEqual(text, "Point: 1");
  });

  it('click', () => {
    const spyCB:any = spy();
    const actions:any = {increment: spyCB};
    const state: CounterState = {num: 1};
    const wrapper: ShallowWrapper<CounterState, {}> = shallow(
      <Counter value={state} actions={actions} />
    );

    wrapper.find('Button').at(0).simulate('press');
    assert.deepEqual(spyCB.calledOnce, true);
    assert.deepEqual(spyCB.calledWith(3), true);
  });
});