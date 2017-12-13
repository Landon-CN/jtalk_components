---
order: 1
---

> 水平菜单

``` jsx 
import React from 'react';
import {Menu} from 'jtalk_components';

export default class MenuDemo extends React.Component{
    state = {
        active: '1'
    }
    onClick=(key)=>{
        this.setState({
            active:key
        });
    }
    render(){
        return (
                <Menu
                    selectedKeys={this.state.active}
                    onClick={this.onClick}
                >
                    <Menu.Item key="1">
                        普通菜单
                    </Menu.Item>
                    <Menu.Item key="3">
                        普通菜单
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a target="_blank" href="http://www.baidu.com">跳转链接</a>
                    </Menu.Item>
                </Menu>
            
            )
    }
    
}

```
<style>

</style>
具有`primary`,`danger`或者不填