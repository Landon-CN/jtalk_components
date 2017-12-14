/* tslint:disable */import React from 'react';
import {Row, Col} from 'jtalk_components';

function test(){
    return (
        <div className="demo-type">
            <Row>
              <Col unit={4}>column</Col>
              <Col xs={2} offset={2}>column</Col>
            </Row>
        </div>

    )
}
export default test;