---
order: 1
---

> 水平菜单

``` jsx 
import React from 'react';
import { Menu } from 'jtalk_components';

export default class MenuDemo extends React.Component {
  state = {
    active: '4'
  }
  onClick = (key) => {
    this.setState({
      active: key
    });
  }
  onOpenChange = (xx)=>{
    // console.log(xx)
  }
  render() {
    return (
      <Menu
        selectedKeys={[this.state.active]}
        onClick={this.onClick}
        onOpenChange={this.onOpenChange}
        className='menu-demo1'
      >
        <Menu.Item key="1">
          普通菜单
        </Menu.Item>
            <Menu.SubMenu title="下拉菜单">
                <Menu.Item key="4">
                    菜单1
                </Menu.Item>
                <Menu.Item key="5">
                    菜单2
                </Menu.Item>
                <Menu.SubMenu title="弹出菜单">
                <Menu.Item key="6">
                    菜单1
                </Menu.Item>
                <Menu.Item key="7">
                    菜单2
                </Menu.Item>
            </Menu.SubMenu>
            </Menu.SubMenu>
     
        <Menu.Item key="3">
          <a target="_blank" href="http://www.baidu.com">跳转链接</a>
        </Menu.Item>
      </Menu>

    )
  }

}


```
<style>
  .menu-demo1 {
    margin-bottom: 100px;
  }
</style>
具有`primary`,`danger`或者不填