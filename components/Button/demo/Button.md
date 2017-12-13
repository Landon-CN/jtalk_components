---
order: 1
---

> 可以点击

``` jsx 
import React from 'react';
import {Button} from 'jtalk_components';

function test(){
    return (
        <div className="demo-type">
            <Button >Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="danger">Danger</Button>
        </div>
       
    )
}
export default test;

```
<style>
    .demo-type .jtalk-btn {
        margin-right:10px;
    }
</style>
具有`primary`,`danger`或者不填