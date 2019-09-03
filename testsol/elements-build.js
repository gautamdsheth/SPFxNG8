const concat = require('concat');

(async function build() {
  const files = [
    './dist/testsol/runtime.js',
    './dist/testsol/polyfills.js',
    './dist/testsol/scripts.js',
    './dist/testsol/main.js'
  ];
  await concat(files, './dist/testsol/bundle.js');
})();
