import React from 'react'
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react'

interface IDropdownPortalProps {
  onOutsideClick?: () => void
}

class Portal extends React.PureComponent<IDropdownPortalProps, never> {
  private rootRef?: HTMLElement

  private updateRootRef = (rootRef: HTMLDivElement) => this.rootRef = rootRef

  private get portalContent () {
    const {
      children,
      onOutsideClick
    } = this.props

    return (
      <div ref={this.updateRootRef}>
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: onOutsideClick,
            initialFocus: document.body,
            clickOutsideDeactivates: true
          }}
        >
          {children}
        </FocusTrap>
      </div>
    )
  }

  public render (): React.ReactPortal {
    return ReactDOM.createPortal(this.portalContent, document.body)
  }
}

export {
  IDropdownPortalProps,
  Portal
}
