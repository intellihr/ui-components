import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Color from 'color'
import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import { Utils, Variables } from '../../../common'

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

const dialogContentMaxWidth = 360
const dialogPadding = Variables.Spacing.sLarge
const totalDialogWidth = dialogContentMaxWidth + (dialogPadding * 2)

const StyledReactModal = styled(ReactModalAdapter)`
  .dialog-overlay {
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
  }

  .dialog {
    background-color: ${Variables.Color.n100};
    border: 1px solid ${Variables.Color.n400};
    border-radius: ${Variables.Style.borderRadius}px;
    flex-shrink: 0;
    height: auto;
    margin: auto;
    outline: none;
    overflow-y: visible;
    padding: ${dialogPadding}px;
    position: relative;
    max-width: ${dialogContentMaxWidth}px;

    ${Utils.mediaQueryBetweenSizes({ maxPx: totalDialogWidth })} {
      margin: auto ${Variables.Spacing.sLarge}px;
    }
  }
`

export {
  IReactModalAdapter,
  StyledReactModal
}
