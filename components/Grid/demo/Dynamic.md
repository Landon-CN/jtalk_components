---
order: 2
---

> 响应式布局

``` jsx 
import React from 'react';
import {Row, Col} from 'jtalk_components';

function test(){
    return (
        <div className="demo-type">
            <Row>
              <Col sm={8} lg={5}>column</Col>
              <Col sm={2} lg={5} offset={2}>column</Col>
            </Row>
            <Row style={{marginTop: 10}}>
              <Col sm={{unit:5}} lg={5}>column</Col>
              <Col sm={{unit:5,offset:2}} lg={{offset:0,unit:7}}>column</Col>
            </Row>
        </div>
       
    )
}
export default test;

```
<style>
    .demo-type .jtalk-col {
        background:#00A0E9;
        color:#fff;
        text-align:center;
        line-height:30px;
    }
</style>