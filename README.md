# @intellihr/ui-components

A common React components library that is used in our company.

## Get Started

```javascript
yarn add @intellihr/ui-components
// or
npm i @intellihr/ui-components
```

To use in the consumer project, we could simply do this (only import the css if the component has a specific css module/file):

``` javascript
import { Modal } from '@intellihr/ui-components'
import '@intellihr/ui-components/dist/Modal.css'
```

## Local Development Guide

After clone down the repository, please run everything inside the provided docker container

```!bash
docker-compose run --rm code /bin/sh
```

Please install local dependencies:

```javascript
yarn
```

To preview the components, we could write a example usage in the Markdown file with JSX syntax in the component folder, e.g. `Callout.examples.md`

```jsx
<Callout type="info">
  <div className="title">
  Information!
  </div>
  Bringing you the lasted news.
</Callout>
```

Some development points:

* Tests are written in `__tests__` of each component folder

* No default export (https://palantir.github.io/tslint/rules/no-default-export/)

* This project is developed with Typescript

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
