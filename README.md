# NodeJS Training Project

![Node CI](https://github.com/Soontao/nodejs-training/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/Soontao/nodejs-training/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/nodejs-training)

## Setup

### For Trainee

* download the `trainee package` (given by trainer ) & unzip it
* maintain the `author` in the `training.config.json` file
* `npm install` to install dependencies
* run the `npm run download` command to get the latest tests cases (trainee should do the `download` ever time when the trainer publish new tests)
* adjust the generated cases & `npm run test` & make all test cases passed

### For Trainer

* maintain the `specs` url in the `training.config.json` file, replace the `training001` with a unique id like `corp-a-b-training-001`
* maintain the `specs` definitions in `src/tests` like `src/tests/basics/sum-1.js`
* self impl/test
* `npm run upload` to publish tests (and let trainees do the `download` command)
* `npm run generate` to generate trainee package in the `dist` directory (first time)

## Components

### Github Integration

This project is integrated github with workflow, once you fork/update your repository (on github), the workflow will be executed automatically.

### ESLint

This project will lint the javascript style by eslint, but the code could be automatic fixed by vscode predefined configuration

### Jest

This project is based on the `Jest` test framework