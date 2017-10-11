import {shallow} from 'enzyme';
import Button from '../components/Button/Button.tsx';
import React from 'react';

describe('Button', () => {
    it('should be render',()=>{
        const warpper = shallow(<Button/>);
        console.log(warpper);
        // expect(3).toBe(3);
    });
});