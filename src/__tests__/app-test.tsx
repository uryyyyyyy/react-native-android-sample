import * as React from 'react';
import {assert} from "chai";
import {shallow} from 'enzyme';
import {App} from '../app';

describe('App', () => {
  it('1 + 1', () => {
    const one = 1;
    assert.deepEqual(one, 1)
  });

  it('rendering', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.find('Text').at(0).prop('children'));
  });

});