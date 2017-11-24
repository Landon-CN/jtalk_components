import {
  shallow
} from 'enzyme';
import Button from '../';
import React from 'react';
const ButtonGroup = Button.Group;

describe('Button Group', () => {
  it('correct render', () => {
    const wrapper = shallow(
      <ButtonGroup>
        <Button>default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
      </ButtonGroup>);

    expect(wrapper.children().length).toBe(3);
  });
  it('size', () => {
    const wrapper = shallow(
      <ButtonGroup size="large">
        <Button>default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
      </ButtonGroup>);
    const wrapperSmall = shallow(
      <ButtonGroup size="small">
        <Button>default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
      </ButtonGroup>);
    expect(wrapper.hasClass('jtalk-btn-group-lg')).toBeTruthy();
    expect(wrapperSmall.hasClass('jtalk-btn-group-sm')).toBeTruthy();
  })
});
