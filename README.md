
## folder/file strcture
│   .editorconfig
│   .env
│   .eslintignore
│   .eslintrc
│   .gitattributes
│   .gitignore
│   .lintstagedrc
│   .prettierrc
│   package.json
│   README.md
│
├───.husky
│   │   pre-commit
│   │
│   └───_
│           .gitignore
│           husky.sh
│
├───public
│       favicon.ico
│       favicon.png
│       index.html
│       manifest.json
│       robots.txt
│       _redirects
│
└───src
    │   App.js
    │   config-global.ts
    │   index.css
    │   index.js
    │   index.scss
    │   reportWebVitals.js
    │   routes.js
    │
    ├───assets
    │
    ├───components
    │   ├───footer
    │   │       index.js
    │   │       styles.css
    │   │
    │   ├───header
    │   │       index.js
    │   │       styles.css
    │   │
    │   └───not-found
    │           index.js
    │
    ├───context
    │       ThemeContext.js
    │
    ├───hooks
    │       useTheme.js
    │
    ├───layout
    │       Public.js
    │
    ├───modules
    │   ├───auth
    │   │   │   constants.js
    │   │   │   firebase.js
    │   │   │   index.css
    │   │   │   index.js
    │   │   │   routes.js
    │   │   │
    │   │   ├───containers
    │   │   │       DesktopViewContainer.jsx
    │   │   │       MobileViewContainer.jsx
    │   │   │
    │   │   ├───hooks
    │   │   └───ui
    │   │       │   FormSam.jsx
    │   │       │   Helpers.jsx
    │   │       │
    │   │       ├───desktop-view
    │   │       │       Index.jsx
    │   │       │
    │   │       └───mobile-view
    │   │               Index.jsx
    │   │
    │   ├───home
    │   │   │   constants.js
    │   │   │   index.css
    │   │   │   index.js
    │   │   │   routes.js
    │   │   │
    │   │   ├───containers
    │   │   │       UserContainer.jsx
    │   │   │
    │   │   ├───hooks
    │   │   └───ui
    │   │       ├───banner
    │   │       │       index.js
    │   │       │       styles.css
    │   │       │
    │   │       ├───dropdown
    │   │       │       index.js
    │   │       │
    │   │       ├───filters
    │   │       │       index.js
    │   │       │       SmallScreenFilters.js
    │   │       │       styles.css
    │   │       │
    │   │       ├───form
    │   │       │       Button.js
    │   │       │       Input.js
    │   │       │       styles.css
    │   │       │       Switch.js
    │   │       │
    │   │       ├───profile-card
    │   │       │       index.js
    │   │       │       styles.css
    │   │       │
    │   │       └───user-list
    │   │               index.js
    │   │               styles.css
    │   │
    │   ├───jobs
    │   │   │   constants.js
    │   │   │   index.js
    │   │   │   routes.js
    │   │   │
    │   │   ├───containers
    │   │   │       JobContainer.jsx
    │   │   │
    │   │   ├───hooks
    │   │   └───ui
    │   │       ├───banner
    │   │       │       index.js
    │   │       │       styles.css
    │   │       │
    │   │       ├───dropdown
    │   │       │       index.js
    │   │       │
    │   │       ├───filters
    │   │       │       index.js
    │   │       │       SmallScreenFilters.js
    │   │       │       styles.css
    │   │       │
    │   │       ├───form
    │   │       │       Button.js
    │   │       │       Input.js
    │   │       │       styles.css
    │   │       │       Switch.js
    │   │       │
    │   │       └───job
    │   │               index.js
    │   │               styles.css
    │   │
    │   ├───network
    │   │   │   constants.js
    │   │   │   index.js
    │   │   │   routes.js
    │   │   │
    │   │   ├───containers
    │   │   │       NetWorkDetailsContainer.jsx
    │   │   │
    │   │   ├───hooks
    │   │   └───ui
    │   │       ├───form
    │   │       │       Button.js
    │   │       │       Input.js
    │   │       │       styles.css
    │   │       │       Switch.js
    │   │       │
    │   │       ├───network-details
    │   │       │       index.js
    │   │       │       styles.css
    │   │       │
    │   │       └───user-network
    │   │               index.js
    │   │               styles.css
    │   │
    │   └───reset
    │       │   constants.js
    │       │   index.css
    │       │   index.js
    │       │   routes.js
    │       │
    │       ├───containers
    │       │       ResetContainer.jsx
    │       │
    │       ├───hooks
    │       └───ui
    ├───RTK
    │   ├───app
    │   │       store.js
    │   │
    │   └───Reducers
    │           actions.js
    │           initial_state.js
    │           Reducers.js
    │           thunk.js
    │
    └───utils
            endPoints.js
            HELPER.jsx
            LoadingSkelton.jsx