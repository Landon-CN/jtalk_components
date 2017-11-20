/* tslint:disable */import React from 'react';
import {Button} from 'jtalk_components';
const ButtonGroup = Button.Group;

function test(){
    return (
        <div className="demo-button-group">
            <ButtonGroup size="small">
                <Button>default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup size="large">
                <Button>default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </ButtonGroup>

        </div>
    )
}
export default test;