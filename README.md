# @intellihr/ui-components

A common React components library that is used in our company.

## Badges

### Master

* ![Coverage](https://gitlab.com/intellihr/ui-components/badges/master/coverage.svg)
* ![Build status](https://gitlab.com/intellihr/ui-components/badges/master/build.svg)

### Develop

* ![Coverage](https://gitlab.com/intellihr/ui-components/badges/develop/coverage.svg)
* ![Build status](https://gitlab.com/intellihr/ui-components/badges/develop/build.svg)

## Table of Contents

* [Get Started](#get-started)
* [Local Development Guide](#local-development-guide)
  * [Run Docker](#run-docker)
  * [Install Dependency](#install-dependency)
  * [Add Dependency](#add-dependency)
  * [Development](#development)
  * [Lint](#lint)
* [Customisation](#customisation)

## Get Started

```javascript
yarn add @intellihr/ui-components
// or
npm i @intellihr/ui-components
```

To use in the consumer project,
we could simply do this
(only import the css if the component has a specific css module/file):

``` javascript
import { Modal } from '@intellihr/ui-components'
import '@intellihr/ui-components/dist/Modal.css'
```

## Local Development Guide

### Run Docker

After clone down the repository,
please run everything inside the provided docker container

```!bash
docker-compose run --rm code /bin/sh
```

### Install Dependency

Please install local dependencies:

```!bash
npm install
```

### Add Dependency

Ui-components must NOT contain any dependency so that
the bundled file does not contain any 3rd party library.

For all dependecies, use the combination of
`peerDependencies` and `devDependencies`

1. Add `devDependencies`

```!bash
npm add some-library --save-dev
```

2. For `dependencies`, update `package.json`

```json
{
  "devDependencies": {
    "some-library": "^1.0.0"
  },
  "peerDependencies": {
    "some-library": "^1.0.0"
  }
}
```

In this case, the consumer will be responsible to download
the dependencies.

### Development

To preview the components,
we could write a example usage in the Markdown file
with JSX syntax in the component folder, e.g. `Callout.examples.md`

```jsx
<Callout type="info">
  <div className="title">
  Information!
  </div>
  Bringing you the lasted news.
</Callout>
```

Some development points:

* Tests are written in `.test.tsx` of each component `.tsx` file

* [No default export](https://palantir.github.io/tslint/rules/no-default-export/)

* This project is developed with Typescript

### Lint

Typescript Style Check

```!bash
npm run lint
```

with autofix

```!bash
npm run lint:fix
```

Sass Style Check

```!bash
npm run lint:sass
```

### Code Quality Analysis

```!bash
npm run codequality
```

It will then generate `.codeclimate/codeclimate.html`
(Note: This takes time)

## Customisation

If you need a customised e.g. `Callout` component, you could do something like:

```javascript
import { Callout } from '@intellihr/ui-components'
class MyCallout extends React.SFC<MyCalloutProps> {
  render() {
    // ... some of your logic...
    return <Callout {...myLogic} />
  }
}
```
