import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Color from 'color'
import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import { Variables } from '../../../common'

interface IReactModalAdapter extends ReactModal.Props {
  className?: string
}

class ReactModalAdapter extends React.PureComponent<IReactModalAdapter> {
  private overlayRef: HTMLDivElement | null = null

  public render (): JSX.Element {
    const {
      className,
      children,
      ...props
    } = this.props

    return (
      <ReactModal
        overlayRef={this.setOverlayRef}
        portalClassName={className}
        className={className}
        {...props}
      >
        {children}
      </ReactModal>
    )
  }

  private setOverlayRef = (overlayRef: HTMLDivElement) => {
    if (!this.overlayRef && overlayRef) {
      disableBodyScroll(overlayRef, { reserveScrollBarGap: true })
    } else if (this.overlayRef && !overlayRef) {
      enableBodyScroll(this.overlayRef)
    }

    this.overlayRef = overlayRef
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
    -webkit-overflow-scrolling: touch;

    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    @media only screen and (max-width: ${breakpointTablet}px) {
      background-color: ${Variables.Color.n100};
      height: 100%;
      min-height: 100vh;
      padding: 0;

      left: 0;
      margin: 0;
      top: 0;
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

    &.subcomponent-modal-style {
      padding: 0;
      display: flex;
      flex-direction: column;

      .modal-close-button {
        right: 29px;
        top: 33px;
        line-height: 14px;
      }
    }

    @media only screen and (max-width: ${breakpointTablet}px) {
      border: 0;
      border-radius: 0;

      max-width: none;
      min-height: 100vh;
      position: initial;
      transform: none;

      // Add a bottom padding in mobile to counteract ios bottom bar
      padding-bottom: 100px;
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

    &.modal-size-fullscreen {
      min-width: 0;
      width: auto;

      @media only screen and (min-width: ${breakpointTablet}px) {
        min-height: calc(100vh - 2 * 1rem);
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }
`

export {
  IReactModalAdapter,
  StyledReactModal
}
