# ui-components

A common React components library that is used in our company

## Why

It helps we migrate our UI specific logic, and it's single source of truth of components.

## Get Started

To preview the components without local development, we could simply run the docker container:

``` sh
docker-compose up -d
```

## Usage

To use in the consumer project, we could simply do this (only import the css if the component has a specific css module/file):

``` javascript
import { Modal } from '@intellihr/ui-components'
import '@intellihr/ui-components/dist/Modal.css'
```

## Local Development Guide

### No default class

## Compilation

Basically it uses 

## Typescript Usage

This project is written in Typescript.

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
