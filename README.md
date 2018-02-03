# lights-react-out &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wachino/lights-react-out/blob/master/LICENSE) [![Coverage Status](https://coveralls.io/repos/github/wachino/lights-react-out/badge.svg?branch=master)](https://coveralls.io/github/wachino/lights-react-out?branch=master) [![CircleCI](https://circleci.com/gh/wachino/lights-react-out.svg?style=shield)](https://circleci.com/gh/wachino/lights-react-out)
Lights out game implemented with [reactjs](https://github.com/facebook/react).

## What's Lights out game?

Lights out game consists of a N by N grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. The game goal is to switch all the lights off, preferably in a few button presses as possible.

And... How can user play? Pressing any of the lights will toggle it and the adjacent lights. So... Are you ready to solve the puzzle and overcome your own movement record? &#x1F4AA; &#x1F3C6;

## Game development technologies
This game is implemented with [reactjs](https://github.com/facebook/react). But... what else? Well, we also have used:
* [Nodejs](https://nodejs.org/en/) (version >= 8)
* [Npm](https://www.npmjs.com)
* [Webpack](https://webpack.js.org):

  * [Babel](https://babeljs.io)

* Continuous integration and deployment:
  
  * [circleci](https://circleci.com): It provides us automation servers where we can implement jobs to test and deploy the application in different Operating system.
  * [coverrals](https://coveralls.io): Tool that allow to see the test coverage provided by [istanbul](https://istanbul.js.org).

## Style
### Commit messages
It should match the pattern:

`[{type}][LRO-{issuenr}] {commit description}.`

  * `Style refactor in example.js file (this is optional)`
  * `Updated README file to add style section (this is optional)`

Where:
  * {type}: [Conventional commit type](https://github.com/pvdlg/conventional-commit-types).
  * {issuenr}: Is the GitHub issue number.
  * {commit description}: Simple description to indicate what relevant changes have been done.

### Filename convention
If we need to include multiple words into a filename, then we will separate them using a dot ('.'). Example:
***hello.world.js***

## Licence
Lights react out game is [MIT licensed](https://github.com/wachino/lights-react-out/blob/master/LICENSE).

