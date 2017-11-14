---
order: 2
---

> 按钮大小

``` jsx 
import React from 'react';
import {Button} from 'Com';

function test(){
    return (
        <div className="btn-demo-size">
            <Button size="small">small</Button>
            <Button size="default">default</Button>
            <Button size="large">large</Button>
        </div>
        
    )
}
export default test;

```

<style>
.btn-demo-size  .jtalk-btn{
    margin-right: 10px;
}

</style>