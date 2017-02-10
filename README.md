##Reactive React Application Seed

`Code style:`

	- Beautifier
	- Babel
	- Eslint

`Bundle packaging:`

	- Webpack 2
	- Dashboard
	- Tree Shaking
	- Hot Module Reload
	
`Libraries:`

	- Rxjs
	- Redux
	- Redux Observable
	- Redux Router
	- Sass
	- Isomorphic Fetch
	- Ramda
	- Reselect
	- Flow

`Testing tools:`

	- Protractor
	- Karma (PhantomJs, Chrome, Firefox)
	- Mocha
	- Sinon
	- Chai
	- Istanbul
	- Backstopjs
	- Redux Mock Store
	- Isomorphic Fetch Mock
	- Test Utils
	- Shallow Test Utils
	- Component Stubbing Utilities

`Featuring:`

	- Component Tests
	- Action Tests
	- Reducer Tests
	- Epic Tests
	- End-To-End Tests
	- Visual Regression Tests

##Quickstart

Use `npm install` to install all of the necessary dependencies and binaries. Duh.

Use `npm start` to start the webpack development server with hmr capabilites and head over to `http://localhost:3000` for your local development environment.

Use `npm test` to fire continuous unit/integration testing. All of the changes in your files will be watched and run through PhantomJs environment, test results and coverage will be reported to your console immediately.

Use `npm run build` to build for production purposes.

##Unit and Integration Tests

Use `npm run test:spec:watch:phantomjs` to fire continuous unit/integration testing. All of the changes in your files will be watched and run through PhantomJs environment, test results and coverage will be reported to your console immediately.

Use `npm run test:spec:watch:all` to fire continuous unit/integration testing. Same as above, only Firefox and Chrome will also be kept running.

Use `npm run test:spec:once` to fire unit/integration testing. PhantomJs, Firefox and Chrome will be used to perform testing. This script will generate coverage and test completion reports.

##End-To-End Tests

Use `npm run test:e2e:update` in order to update you webdriver.

Use `npm run test:e2e:driver` to start the webdriver.

Use `npm run test:e2e:once` to run all of the available end-to-end tests. This script will generate end-to-end test completion report.

##Visual Regression Tests

Use `npm run test:vis:reference` in order to update all of the references. All of your future rendered images will be compared against references, acquired during this step. You should keep your references in your repository.

Use `npm run test:vis:once` to fire visual regression tests and generate the visual regression report with screenshots.

##Combined Tests for Continuous Integration

Use `npm run test:ci` for complete testing including unit, integration, end-to-end and visual regression tests.

##Building Pipeline

Use `npm run build:prod` to build for production purposes.

Use `npm run build:dev` to build for development purposes.

Use `npm run build:run` to start the dedicated local server on `http://localhost:8080/` that will serve the binary build.

##Directory Structure

	.
	├── source
	│   ├── components
	│   │   ├── Stateless
	│   │   │   ├── stateless.component.js
	│   │   │   ├── stateless.component.spec.js
	│   │   │   └── stateless.style.scss
	│   │   └── index.js
	│   ├── containers
	│   │   ├── Stateful
	│   │   │   ├── stateful.container.js
	│   │   │   └── stateful.container.spec.js
	│   │   └── index.js
	│   ├── actions
	│   │   ├── index.js
	│   │   └── sample.action.js
	│   │   └── sample.action.spec.js
	│   ├── reducers
	│   │   ├── index.js
	│   │   ├── todos.reducer.js
	│   │   └── todos.reducer.spec.js
	│   ├── epics
	│   │   ├── index.js
	│   │   └── sample.epics.js
	│   │   └── sample.epics.spec.js
	│   ├── selectors
	│   │   └── index.js
	│   │   └── sample.selector.js
	│   │   └── sample.selector.spec.js
	│   ├── store
	│   │   └── index.js
	│   ├── helpers
	│   │   ├── index.js
	│   │   └── sample.helper.js
	│   ├── static
	│   │   ├── fonts
	│   │   ├── images
	│   │   └── styles
	│   │       ├── abstracts
	│   │       │   ├── _functions.scss
	│   │       │   ├── _mixins.scss
	│   │       │   └── _variables.scss
	│   │       ├── base
	│   │       │   ├── _base.scss
	│   │       │   ├── _fonts.scss
	│   │       │   ├── _helpers.scss
	│   │       │   └── _typography.scss
	│   │       ├── main.scss
	│   │       ├── themes
	│   │       │   └── _default.scss
	│   │       └── vendor
	│   │           └── _normalize.scss
	│   ├── index.html
	│   └── index.js
	├── tests
	│   ├── e2e
	│   │   └── sample.e2e.test.js
	│   └── visual
	│       ├── sample.before.js
	│       └── sample.ready.js
	├── configuration
	│   ├── application
	│   │   └── constants.js
	│   ├── webpack
	│   │   ├── webpack.config.js
	│   │   └── webpack.test.config.js
	│   ├── backstop
	│   │   ├── references
	│   │   └── backstop.json
	│   ├── flow
	│   │   ├── asset.js.flow
	│   │   └── style.js.flow
	│   ├── karma
	│   │   ├── karma.common.config.js
	│   │   ├── karma.once.config.js
	│   │   ├── karma.watch.all.config.js
	│   │   └── karma.watch.phantomjs.config.js
	│   └── protractor
	│       ├── protractor.config.js
	│       └── protractor.setup.js
	├── .babelrc
	├── .eslintrc
	├── .flowconfig
	├── .gitignore
	├── .jsbeautifyrc
	├── package.json
	└── README.md