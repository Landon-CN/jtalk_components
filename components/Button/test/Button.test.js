import { shallow } from 'enzyme';
import Button from '../';
import React from 'react';

describe('Button', () => {
  it('should be render', () => {
    const wrapper = shallow(<Button>test</Button>);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.text()).toBe('test');
  });

  it('button size', () => {
    const wrapperSm = shallow(<Button size="small">test</Button>);
    const wrapperLg = shallow(<Button size="large">test</Button>);
    expect(wrapperSm.hasClass('jtalk-btn-sm')).toBeTruthy();
    expect(wrapperLg.hasClass('jtalk-btn-lg')).toBeTruthy();
  });

  it('button click', () => {
    jest.useFakeTimers();
    const clickCb = jest.fn();
    const wrapper = shallow(<Button onClick={clickCb}>test</Button>);
    wrapper.simulate('click');
    expect(wrapper.hasClass('jtalk-btn-clicked')).toBeTruthy();

    expect(clickCb.mock.calls.length).toBe(1);
    jest.runAllTimers();
    // timer没啥用，比须手动设置下
    wrapper.setState(wrapper.state());
    expect(wrapper.hasClass('jtalk-btn-clicked')).toBeFalsy();
  });

  it('button type', () => {
    const wrapperP = shallow(<Button type="primary">test</Button>);
    const wrapperD = shallow(<Button type="danger">test</Button>);
    expect(wrapperP.hasClass('jtalk-btn-primary')).toBeTruthy();
    expect(wrapperD.hasClass('jtalk-btn-danger')).toBeTruthy();
  });

});
