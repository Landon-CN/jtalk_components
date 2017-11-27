---
title: Button 按钮
---

# Button 按钮

> 按钮

### Button API

| 属性        |说明           | 类型  | 默认值|
| ------------- |:-------------:| -----:|
| htmlType?     | 设置button的type类型,类型参考[HTML TYPE](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string |- |
| size?     | 设置大小,可选值为:`default`,`small`,`large` | string |`default` |
| loading?     | 设置loading状态,可延迟多少毫秒生效,暂未实现 | boolean &#124; { delay: number } | `false` |
| type?     | 设置按钮类型,可选值:`primary`,`danger` | string | `primary` |
| onClick?     | 设置按钮点击回调 | function | - |

除了上述属性,其它属性都会直接传到 `<button></button>`