##React Application Seed


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
	- Sass
	- Isomorphic Fetch

`Testing tools:`

	- Karma (PhantomJs, Chrome, Firefox)
	- Mocha
	- Sinon
	- Chai
	- Istanbul
	- Redux Mock Store
	- Isomorphic Fetch Mock
	- Test Utils
	- Shallow Test Utils
	- Component stubbing utilities

`Featuring:`

	- Component tests
	- Action tests
	- Reducer tests
	- Epic tests

`Todo:`

	- Router
	- Ramda
	- Protractor
	- Reselect
	- Flow
	- Resemble

##Directory Structure

	.
	├── src
	│   ├── components
	│   │   ├── Stateless
	│   │   │   ├── stateless.component.js
	│   │   │   ├── stateless.component.spec.js
	│   │   │   └── stateless.style.scss
	│   │   └── index.js
	│   ├── containers
	│   │   ├── App
	│   │   │   ├── app.container.js
	│   │   │   └── app.container.spec.js
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
	│   ├── store
	│   │   └── index.js
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
	├── config
	│   └── constants.js
	├── karma
	│   ├── karma.common.config.js
	│   ├── karma.once.config.js
	│   ├── karma.watch.all.config.js
	│   └── karma.watch.phantomjs.config.js
	├── webpack.config.js
	└── webpack.test.config.js
	├── package.json
	├── README.md