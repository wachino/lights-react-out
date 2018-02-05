
const path = require('path');
const shelljs = require('shelljs');
const source = path.resolve(__dirname, 'tpl-pre-commit.js');
const dirDest = path.resolve(__dirname, '.git', 'hooks');
const dest = path.resolve(dirDest, 'pre-commit');

shelljs.mkdir('-p', dirDest);
shelljs.cp('-f', source, dest);
shelljs.chmod('+x', dest);
