import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { getColor } from '../Color'

const { radius } = require('../sass/globals.scss')

interface IReactModalAdapter extends ReactModal.Props {
  className?: string
}

class ReactModalAdapter extends React.PureComponent<IReactModalAdapter> {
  get contentClassName () {
    return `${this.props.className}__content`
  }

  get overlayClassName () {
    return `${this.props.className}__overlay`
  }

  public render (): JSX.Element {
    const {
      className
    } = this.props

    return (
      <ReactModal
        portalClassName={className}
        className={this.contentClassName}
        overlayClassName={this.overlayClassName}
        {...this.props}
      />
    )
  }
}

const StyledReactModal = styled(ReactModalAdapter)`
  .modal-overlay {
    background-color: ${getColor('modal-overlay')};

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem 0;
    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    @include breakpoint(small down) {
      overflow-y: hidden;
      padding: 0;
    }
  }

  .modal {
    background-color: ${getColor('main-background')};
    border: 1px solid ${getColor('border')};
    border-radius: ${radius};
    flex-shrink: 0;
    height: auto;
    margin: auto;
    outline: none;
    overflow-y: visible;
    padding: 1.5rem;
    position: relative;

    @include breakpoint(small down) {
      border: 0;
      border-radius: 0;

      max-width: none;
      overflow-y: scroll;
      position: initial;
      transform: none;
      -webkit-overflow-scrolling: touch;

      height: 100%;
      left: 0;
      margin: 0;
      min-height: 100vh;
      top: 0;
    }

    .modal-close-button {
      cursor: pointer;

      position: absolute;
      right: 1rem;
      top: 0.5rem;

      color: ${getColor('main-text')};
      font-size: 2em;
      line-height: 1;

      @include breakpoint(small down) {
        position: fixed;
        will-change: scroll-position;
      }
    }

    &.fixed-xxlarge-up {
      min-width: 1380px;
      width: 1380px;

      @include breakpoint(xlarge down) {
        min-width: 0;
        width: 90%;
      }

      @include breakpoint(small only) {
        min-width: 0;
        width: 100%;
      }
    }

    &.fixed-large-up {
      min-width: 960px;
      width: 960px;

      @include breakpoint(medium only) {
        min-width: 0;
        width: 90%;
      }

      @include breakpoint(small only) {
        min-width: 0;
        width: 100%;
      }
    }

    &.fixed-medium-up {
      min-width: 600px;
      width: 600px;

      @include breakpoint(small only) {
        min-width: 0;
        width: 100%;
      }
    }
  }
`

export {
  IReactModalAdapter,
  StyledReactModal
}
