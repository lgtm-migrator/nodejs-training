# NodeJS Training Project

![Node CI](https://github.com/Soontao/nodejs-training/workflows/Node%20CI/badge.svg)

## Setup

### For Trainee

* download trainee package & unzip
* maintain the `specs` in the `training.config.json` file
* maintain the `author` in the `training.config.json` file
* `npm install` to install dependencies
* `npm run download` to get the latest tests cases (you should `download` when trainer publish new tests)
* adjust the generated cases & `npm run test` & make all test cases passed

### For Trainer

* maintain the `specs` url in the `training.config.json` file, replace the `training001` with a unique id like `corp-a-b-training-001`
* maintain the `specs` definitions in `src/tests` like `src/tests/basics/sum-1.js`
* self impl/test
* `npm run upload` to publish tests (and let trainees do the `download` action)
* `npm run generate` to generate trainee package in the `dist` directory (first time)

## Components

### Github Integration

This project is integrated github with workflow, once you fork/update your repository (on github), the workflow will be executed automatically.

### ESLint

This project will lint the javascript style by eslint, but the code could be automatic fixed by vscode predefined configuration

### Jest

This project is based on the `Jest` test framework