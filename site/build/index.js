const build = require('./build');
const watch = require('node-watch');
const path = require('path');
// 先执行一次

console.log('编译markdown文件');
build();

const watchFlag = process.argv[process.argv.length - 1] === '--watch';
if (watchFlag) {
  console.log('监听变化中...')
  const watcher = watch(path.resolve(__dirname, '../../components/'), {
    recursive: true,
    filter: /\.md/
  });

  watcher.on('change', (evt, name) => {
    build();
  });

}
