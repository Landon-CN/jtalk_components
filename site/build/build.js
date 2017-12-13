const marked = require('marked');
const highlightJs = require('highlight.js');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const renderer = new marked.Renderer();
const componentsPath = path.resolve(__dirname, '../../components');
marked.setOptions({
  highlight: function (code, lang) {
    let componentCode = highlightJs.highlightAuto(code).value.replace(/\`/g, '\\`').replace(/\$\{/g, '\\$\\{');
    let highlightCode = componentCode.replace(/class=/g, 'class_code=');

    // return `<div dangerouslySetInnerHTML={{__html:\`${highlightCode}\`}}></div>`;
    return highlightCode;
  }
});

var _table = renderer.table;
renderer.table = function (header, body) {
  return _table.call(this, header, body).replace('<table', '<table class="table table-bordered table-hover" style="width:auto;"')
}

if (!fs.existsSync(path.resolve(__dirname, '../src/components'))) {
  fs.mkdirSync(path.resolve(__dirname, '../src/components'));
}

function start() {
  glob("**/index.md", {
    cwd: componentsPath
  }, (err, list) => {
    if (err) return console.error(err);
    let promiseArr = [];
    for (let itemPath of list) {
      promiseArr.push(readFile(path.resolve(componentsPath, itemPath), itemPath));
    }
    Promise.all(promiseArr).then((contentList) => {
      readMdDemo(contentList);
    }).catch((e) => {
      console.error(e);
    });

  });
}



/**
 * 读取每个文件夹下的demo
 * @param {*} list
 */
function readMdDemo(list) {
  const listPromise = [];
  for (let item of list) {
    const itemPath = item.itemPath;
    const demoPath = path.resolve(componentsPath, './' + path.dirname(itemPath) + '/demo');
    const mdList = glob.sync("*.md", {
      cwd: demoPath
    });
    const mdPromise = [];
    for (const mdItem of mdList) {
      mdPromise.push(readFile(path.resolve(demoPath, mdItem), mdItem));
    }

    const readDemoPromise = Promise.all(mdPromise).then((demoContentList) => {
      item.demo = demoContentList;
      return item;
    });
    listPromise.push(readDemoPromise);
  }
  Promise.all(listPromise).then((list) => {
    compileFile(list)
  }).catch((e) => {
    console.error(e);
  })
}


function readFile(path, itemPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve({
        data,
        itemPath
      });
    });
  });
}

// 将每个markdown转化为React组件，并且生成MenusList.ts
function compileFile(list) {

  for (let [index, item] of list.entries()) {
    const yamlObj = extractYaml(item.data);
    list[index].yaml = yamlObj.yaml;
    list[index].data = marked(yamlObj.data, {
      renderer: renderer
    })
    list[index].itemPath = item.itemPath.substr(0, item.itemPath.indexOf('/'));
  }

  generateMenusList(list);
  generatePage(list);
}

// 生成每一个页面
function generatePage(list) {
  for (let item of list) {
    let componentName = `${item.itemPath}Page`;
    // 目录创建
    const componentPath = path.resolve(__dirname, '../src/components/' + componentName + '/');
    if (!fs.existsSync(componentPath))
      fs.mkdirSync(componentPath);


    const demo = generateDemoList(item.demo, componentPath);
    let demoStr = '';
    for (; demo.list.length > 0;) {
      let list = demo.list.splice(0, 2);

      demoStr += `
      <div className="demo-list row">
      ${list.map((data)=>{
        return `
          <div className="demo col-md-6">
          <div dangerouslySetInnerHTML={{__html:\` ${data.html}\`}}></div>
            <div className="demo-component">
            ${data.component}
            </div>
          </div>
        `
      }).join('')}
      </div>
      `;
    }

    let pageStr = `
    /* tslint:disable */
    import React from 'react';
    ${demo.importStr}

    class ${componentName} extends React.Component<{}, {}> {
      render() {

        return (
          <div>
          <div dangerouslySetInnerHTML={{__html:\` ${item.data}\`}}></div>

           ${demoStr}
          </div>
        );
      }
    }

    export default ${componentName};
    `;


    fs.writeFile(path.resolve(componentPath, './index.tsx'), pageStr, 'utf8', (err) => {
      if (err) console.error(err);
    });
  }
}

/**
 * 生成demo列表
 * @param {*} demoList
 */
function generateDemoList(demoList, componentPath) {
  let importStr = '';
  let list = [];
  for (const demo of demoList) {
    let data = demo.data;
    const yaml = extractYaml(data);

    const renderer = new marked.Renderer();
    let componentCode = '';
    const _code = renderer.code;
    renderer.code = (code, lang) => {

      // 提取代码，并且关掉tslint,替换组件路径，保证有正确的代码提示
      // componentCode = '/* tslint:disable */' + code.replace(/'jtalk_components'/g, '\'../../../../components\'');
      componentCode = '/* tslint:disable */' + code;
      return _code.call(renderer, code, lang);
    }
    yaml.data = marked(yaml.data, {
      renderer: renderer
    }).replace(/class=/g, 'className=').replace(/class_code=/g, 'class=');;
    const baseName = path.basename(demo.itemPath, '.md');
    fs.writeFile(path.resolve(componentPath, baseName + '.tsx'), componentCode, 'utf8', (err) => {
      if (err) console.error(err);
    });
    importStr += `import ${baseName} from './${baseName}';`;

    list.push({
      component: `<${baseName} />`,
      html: yaml.data,
      order: yaml.yaml.order
    });

  }


  list = list.sort((a, b) => {
    return a.order - b.order;
  });

  return {
    importStr,
    list
  }
}

// 生成菜单
function generateMenusList(list) {
  const importStr = getImportStr(list);
  const listStr = getListArr(list);
  const menusListStr = `
    /* tslint:disable */
    import { Component } from 'react';
    ${importStr}

    interface ListData {
      title: string;
      link: string;
      component: new () => Component;
    }

    const list: ListData[] = [];
    ${listStr}
    export default list;
  `;

  fs.writeFile(path.resolve(__dirname, '../src/modules/MenusList.ts'), menusListStr, 'utf8', (err) => {
    if (err) console.error(err);
  })
}


// 生成每一个组件的import xx from '../components/xx'
function getImportStr(list) {
  let ret = '';
  for (let item of list) {
    let componentName = `${item.itemPath}Page`;
    ret += `import ${componentName} from '../components/${componentName}';`;
  }
  return ret;
}

// 生成 list.push(xx)
function getListArr(list) {
  let ret = '';
  for (let item of list) {
    ret += `
    list.push({
      title: '${item.yaml.title}',
      link: '/${item.itemPath}',
      component: ${item.itemPath}Page
    });
    `
  }
  return ret;
}

/**
 * 提取yaml
 * @param {*} data
 */
function extractYaml(data) {
  const reg = /^---([\s\S]*?)---([\s\S]*)/;
  const result = data.match(reg);

  if (!result) {
    console.warn('没有找到yaml \n', data);
    return {
      yaml: {},
      data
    }
  }
  const yamlObj = yaml.load(result[1]);
  return {
    yaml: yamlObj,
    data: result[2]
  };
}


module.exports = start;
