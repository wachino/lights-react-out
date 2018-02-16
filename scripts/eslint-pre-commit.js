const path = require('path');
const git = require('simple-git')(path.resolve(__dirname, '..'));
const CLIEngine = require('eslint').CLIEngine;

git.revparse(['-q', '--verify', 'MERGE_HEAD'], function (err, log) {
  if (!err) {
    git.diffSummary(['--stat-width=2048', '--cached'], runLintOverStagedFiles);
  }
});

function runLintOverStagedFiles (err, stagedFilesObject) {
  if (err || !stagedFilesObject.files.length) {
    return; // No staged files
  }

  var stagedFilesNames = stagedFilesObject.files
    .filter(onlyJS)
    .map(getFileName);

  function onlyJS (fileObject) {
    return fileObject.file.endsWith('.js');
  }

  function getFileName (fileObject) {
    return fileObject.file;
  }

  var cli = new CLIEngine();
  var formatter = cli.getFormatter();
  var report = cli.executeOnFiles(stagedFilesNames);

  console.log(formatter(report.results));

  process.exit(report.errorCount);
}
