const build = require('./build');
const watch = require('node-watch');
const path = require('path');
// 先执行一次
build();
const watcher = watch(path.resolve(__dirname, '../../components/'), {
  recursive: true,
  filter: /\.md/
});

watcher.on('change', (evt, name) => {
  console.log('检测到变化');

  build();
});
