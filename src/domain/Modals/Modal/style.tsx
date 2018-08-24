import React from 'react'
import Color from 'color'
import styled, { StyledComponentClass } from 'styled-components'
import ReactModal from 'react-modal'
import { Variables } from '../../../common'

interface IReactModalAdapter extends ReactModal.Props {
  className?: string
}

class ReactModalAdapter extends React.PureComponent<IReactModalAdapter> {
  get contentClassName (): string {
    const {
      className
    } = this.props

    return className ? `${className}__content` : ''
  }

  get overlayClassName (): string {
    const {
      className
    } = this.props

    return className ? `${this.props.className}__overlay` : ''
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

const {
  breakpointTablet,
  breakpointDesktop,
  breakpointBigDesktop
} = Variables.Breakpoint

const StyledReactModal = styled(ReactModalAdapter)`
  .modal-overlay {
    background-color: ${Color(Variables.Color.n800).alpha(0.45).toString()};

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem 0;
    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    
    @media only screen and (max-width: ${breakpointTablet}px) {
      overflow-y: hidden;
      padding: 0;
    }
  }

  .modal {
    background-color: ${Variables.Color.n100};
    border: 1px solid ${Variables.Color.n400};
    border-radius: ${Variables.Style.borderRadius}px;
    flex-shrink: 0;
    height: auto;
    margin: auto;
    outline: none;
    overflow-y: visible;
    padding: 1.5rem;
    position: relative;

    @media only screen and (max-width: ${breakpointTablet}px) {
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

      color: ${Variables.Color.n800};
      font-size: 2em;
      line-height: 1;

      @media only screen and (max-width: ${breakpointTablet}px) {
        position: fixed;
        will-change: scroll-position;
      }
    }

    &.modal-size-xlarge {
      min-width: ${breakpointBigDesktop - 60}px;
      width: ${breakpointBigDesktop - 60}px;

      @media only screen and (max-width: ${breakpointBigDesktop}px) {
        min-width: 0;
        width: 90%;
      }

      @media only screen and (max-width: ${breakpointTablet}px) {
        min-width: 0;
        width: 100%;
      }
    }

    &.modal-size-large {
      min-width: ${breakpointDesktop - 60}px;
      width: ${breakpointDesktop - 60}px;

      @media only screen and (max-width: ${breakpointDesktop}px) {
        min-width: 0;
        width: 90%;
      }

      @media only screen and (max-width: ${breakpointTablet}px) {
        min-width: 0;
        width: 100%;
      }
    }

    &.modal-size-medium {
      min-width: ${breakpointTablet - 60}px;
      width: ${breakpointTablet - 60}px;

      @media only screen and (max-width: ${breakpointTablet}px) {
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
