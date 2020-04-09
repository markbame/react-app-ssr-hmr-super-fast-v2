#Super Fast and light weight bundles

## SPA SSR and HMR feature

you can also pre transpile before running in production
## Getting started

* clone the project
* npm install
* run `yarn dev` - starts ssr, webpack watch and hot reload
* run `yarn prod` - for production deployment
* run `yarn lint` - for linting
* run `yarn build` - for production build

## uses react16 and webpack4

### node_modules has been included in-case you are having trouble with dependencies, just add it to .gitignore if you don't need it.

### formatting, es2017+, etc.

We have all the esXXXX things - es2015, es2016, es2017, object-rest-spread - courtesy of babel.

### Tests

We're testing via jest, with test files adjacent to the unit under test and named \*.test.js, eg.

### Configuration

Configuration uses 12factor-config, extracting all of the meaningful config properties to env
variables as described by [The Twelve Factor App](https://12factor.net/).

You'll need to set env vars for all of the non-default properties, and maybe override some of
the defaults too.

One way to do this in development is to create a .env file in the root of the project (it will
be .gitignored) and `source ./.env` before running the app.

In code you can access the config properties simply by importing `config.js` from the project root,
e.g. a file in ./src could use config like this:

```
import `../config`
console.log(`the bind port is ${config.bindPort}`)
```
