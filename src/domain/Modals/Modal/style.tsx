import React from 'react'
import Color from 'color'
import styled, { StyledFunction, StyledInterface, StyledComponentClass } from 'styled-components'
import ReactModal from 'react-modal'
import { flow } from 'lodash'
import { IWithStyledBreakpoints, withStyledBreakpoints } from '../../Styles'

const { borderRadius, n100, n400, n800 } = require('../../../common/sass/variables.scss')

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

const styledReactModal: StyledFunction<ReactModal.Props & Partial<IWithStyledBreakpoints>> = flow([
  styled(ReactModalAdapter),
  withStyledBreakpoints
]) as any

const StyledReactModal = styledReactModal`
  .modal-overlay {
    background-color: ${Color(n800).alpha(0.45).toString()};

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem 0;
    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    ${props => props.breakpoint!.down('small')`
      overflow-y: hidden;
      padding: 0;
    `}
  }

  .modal {
    background-color: ${n100};
    border: 1px solid ${n400};
    border-radius: ${borderRadius};
    flex-shrink: 0;
    height: auto;
    margin: auto;
    outline: none;
    overflow-y: visible;
    padding: 1.5rem;
    position: relative;

    ${(props) => props.breakpoint!.down('small')`
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
    `}

    .modal-close-button {
      cursor: pointer;

      position: absolute;
      right: 1rem;
      top: 0.5rem;

      color: ${n800};
      font-size: 2em;
      line-height: 1;

      ${(props) => props.breakpoint!.down('small')`
        position: fixed;
        will-change: scroll-position;
      `}
    }

    &.fixed-xxlarge-up {
      min-width: 1380px;
      width: 1380px;

      ${(props) => props.breakpoint!.down('medium')`
        min-width: 0;
        width: 90%;
      `}

      ${(props) => props.breakpoint!.only('min')`
        min-width: 0;
        width: 100%;
      `}
    }

    &.fixed-large-up {
      min-width: 960px;
      width: 960px;

      ${(props) => props.breakpoint!.only('medium')`
        min-width: 0;
        width: 90%;
      `}

      ${(props) => props.breakpoint!.only('min')`
        min-width: 0;
        width: 100%;
      `}
    }

    &.fixed-medium-up {
      min-width: 600px;
      width: 600px;

      ${(props) => props.breakpoint!.only('min')`
        min-width: 0;
        width: 100%;
      `}
    }
  }
`

export {
  IReactModalAdapter,
  StyledReactModal
}
