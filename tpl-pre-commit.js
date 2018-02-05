#!/usr/bin/env node

const packageJson = require('../../package.json');
const npm = require('npm');
const config = null;

npm.load(config, onLoad);

function onLoad () {
  // Iterate over each script defined in package.json pre-commit tag
  // and launch it
  packageJson['pre-commit'].forEach(runNpmScript);

  function runNpmScript (script) {
    console.log('running script: ', script);
    npm.run(script, function (err, callback) {
      if (err) {
        // Abort commit
        process.exit(1);
      }
    });
  }
}
