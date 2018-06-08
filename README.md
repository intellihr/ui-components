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
    * [Add Dependency](#add-dependency)
        * [Add `dependencies`](#add-dependencies)
        * [Add `devDependencies`](#add-devdependencies)
        * [Add `peerDependencies`](#add-peerdependencies)
    * [Docker](#docker)
        * [Build Image](#build-image)
        * [Run Inside Docker](#run-inside-docker)
    * [Install Dependency](#install-dependency)
    * [Development](#development)
    * [Lint](#lint)
* [Customisation](#customisation)

## Get Started

1. Install ui-components

    ```bash
    yarn add @intellihr/ui-components
    # or
    npm i @intellihr/ui-components
    ```

2. How to use

    ```javascript
    // Import in your javascript to use
    import { OurComponent } from '@intellihr/ui-components'
    ```

    ```sass
    // Import once only for styles
    import '~@intellihr/ui-components/dist/index.css'
    ```

## Local Development Guide

### Add Dependency

![Dependency Mind Map](https://drive.google.com/uc?id=1GHwom14JIMrASrXhuSmbON4aWa1LyAG5)

#### Add `devDependencies`

    ```bash
    yarn add -DE some-library
    ```

#### Add `dependencies`

    ```bash
    yarn add -E some-library
    ```
    
#### Add `peerDependencies`

1. Add `devDependencies`

    ```bash
    yarn add -DE some-library
    ```

2. Update `package.json` to add `peerDependencies`

    ```json
    {
      "devDependencies": {
        "some-library": "1.0.0"
      },
      "peerDependencies": {
        "some-library": "^1.0.0"
      }
    }
    ```

3. Update your consumer to include your `peerDependencies`

    ```bash
    npm i --save-dev some-library
    # or
    yarn add -D some-library
    ```

### Docker

#### Build Imange

```bash
docker-compose build --force-rm code
# or without mounting node_module
docker-composer build --force-rm code-mac
```

#### Run Inside Docker

```bash
docker-compose run --rm code /bin/sh
# or without mounting node_module
docker-composer run --rm code-mac /bin/sh
```

### Install Dependency

```bash
yarn
```

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

```bash
yarn lint
```

with autofix

```bash
yarn lint:fix
```

Sass Style Check

```bash
yarn lint:sass
```

Sass Style Autofix

```bash
yarn lint:sass:fix
```

Styled-Components Check

```bash
yarn lint:css
```

### Code Quality Analysis

```bash
yarn codequality
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
