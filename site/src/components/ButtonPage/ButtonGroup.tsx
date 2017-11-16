/* tslint:disable */import React from 'react';
import {Button} from '../../../../components';
const ButtonGroup = Button.Group;

function test(){
    return (
        <div className="demo-button-group">
            <ButtonGroup>
            <Button>default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </ButtonGroup>
        </div>
    )
}
export default test;