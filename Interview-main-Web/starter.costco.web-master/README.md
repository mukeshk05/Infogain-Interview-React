# starter.costco.web

## Prereq's

- [Nodejs](https://nodejs.org/en/) installed (v14.15.1 at a minimum)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed
- [Gatsby](https://www.gatsbyjs.com/) installed

## Install

- Check out starter.costco.web project source using the _git clone command_
- Run _npm install_ from the root of the starter.costco.web project directory

## Environment variables for local development

- Acquire the environment variables files from your fellow developer. Save _.env.developement_ and _.env.production_ in the root directory of the project.

## Running in (non SSR) development mode

- Run _npm run develop_ from the root of the starter.costco.web project directory

## Running in (SSR) production mode

- Run _npm run build && npm run serve_ from the root of the starter.costco.web project directory

## Viewing in (non SSR) development mode

- starter.costco.web: http://localhost:8000/
- GraphQL: http://localhost:8000/\_\_\_graphql

## Viewing in (SSR) production mode

- starter.costco.web: http://localhost:9000/

## Testing - Jest unit tests

- To run the test suite run _npm test_ from the starter.costco.web project root directory
- Unit tests for Jest reside next to the component your intending to test and include test in the name. i.e., component.test.js

## Test coverage

- To view the Test coverage report in HTML format open the following file via your browser: _<Project_Root>/coverage/reports/lcov-report/components/index.html_

## Testing - Cypress end to end tests

- Start a develop instance of Gatsby: _npm run develop_
- In a different terminal and start Cypress: _npm run cypress:open_
- Click once on my sample test titled: _sampleForm.spec.js_
- A browser instance will start and the tests will run to completion.
- Click the red Stop button in the Cypress console to end the test run and close the browser running the tests.
- Test files for Cypress reside in the directory _./cypress/integration/gatsby_

## Troubleshooting check-list

- Confirm the version of nodejs being used. The required verion is called out in the package.json file.
- Confirm the two environment variables files aren't missing. Both should be hidden files. Meaning they are prefixed with a period. Like _.env.development_ and _.env.production_
- Finally, rebuild your dependencies for the project. Remove the directory _node_modules_ followed by removing the file _package-lock.json_, then run _npm install_ to re-install the project's dependencies.

## Contributing

- Use (Visual Studio Code)[https://code.visualstudio.com/] for your IDE.
  - Install the Prettier - Code formatter extension
  - Install the ESLint extension
  - Configure IDE to apply Prettier on save
- Make sure Prettier formatting is being applied to source code.
- Make sure linting issues are resolved.
- Make sure unit tests for code pass.
- Use the built in VS Code terminal for running commands. Bash for MacOS or git-bash for Windows.
- And finally... Make sure to run _npm run build && npm run serve_ before commiting changes to confirm Gatsby SSR is working correctly.
