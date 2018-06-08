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
    * [Docker](#docker)
        * [Build Image](#build-image)
        * [Run Inside Docker](#run-inside-docker)
    * [Install Dependency](#install-dependency)
    * [Add Dependency](#add-dependency)
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

## Integrated into your project

It's simple. Let's add that into your project:

```bash
yarn add @intellihr/ui-components
```

Or:

```bash
npm i @intellihr/ui-components
```

Also you will need to install the peer dependencies of this project `package.json`. Here is a list of the dependencies you will need to install into your project should you want to use this library:
```javascript
"chart.js": "^2.7.2",
"classnames": "^2.2.5",
"color": "^3.0.0",
"foundation-sites": "^6.4.3",
"html-to-react": "^1.3.3",
"react": "^16.3.1",
"react-chartjs-2": "^2.7.0",
"react-dom": "^16.3.1",
"styled-components": "^3.2.6",
"@intellihr/icons": "0.0.1",
"font-awesome": "4.7.0",
"better-react-spinkit": "^2.0.4",
"react-linkify": "^0.2.2",
"uuid": "^3.2.1"
```

Then included the project css and this project's components css into your project's entry point. e.g. in CRA, it's the `index.js`:

```javascript
import '@intellihr/ui-components/dist/index.css'
import '@intellihr/ui-components/dist/ui-components.css'
``` 

Make sure your project knows how to handle css file type, which is quite simple if you use webpack(and normally your project should have already setup):

```javascript
{
  test: /\.css$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader')
    }
}

```

Then you could start using the components! Test out by:

```javascript
import { Callout } from '@intellihr/ui-components'

<Callout type="info">
  <div className="title">
  Information!
  </div>
  Bringing you the lasted news.
</Callout>
```

## Local Development Guide

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
npm install
```

### Add Dependency

Ui-components must NOT contain any dependency so that
the bundled file does not contain any 3rd party library.

For all dependecies, use the combination of
`peerDependencies` and `devDependencies`

1. Add `devDependencies`

    ```bash
    npm i --save-dev -E some-library
    ```

2. For `dependencies`, update `package.json` (Skip this for `devDependencies`)

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

3. Update your consumer to include your `peerDependencies` (Skip this for `devDependencies`)

    ```bash
    npm i --save-dev some-library
    # or
    yarn add --dev some-library
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

```bash
npm run lint
```

with autofix

```bash
npm run lint:fix
```

Sass Style Check

```bash
npm run lint:sass
```

Sass Style Autofix

```bash
npm run lint:sass:fix
```

Styled-Components Check

```bash
npm run lint:css
```

### Code Quality Analysis

```bash
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
