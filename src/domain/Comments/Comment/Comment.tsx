import React from 'react'
import classNames from 'classnames'
import {
  DropdownMenu,
  IDropdownMenuSectionProps
} from '../../Menus'
import {
  StyledComment,
  CommentActionMenuToggleButton
} from './style'
import { FontAwesomeIcon } from '../../Icons'
import { FormattedText } from '../../Typographies'

export interface ICommentProps {
  /** the name of the person who posted the comment */
  submitter: string,
  /** Displays the comment in a focused state */
  focused: boolean,
  /** The component to render to the left of the comment box */
  avatar: React.Component,
  /** A pill to be displayed right before the date label of the comment (use a span to persist the inline diplay behaviour) */
  pill?: React.Component,
  /** Additional text to display in the array header (preferable a span HTML element) */
  header?: React.Component,
  /** Use DateText component from the list of alreay defined components (a string should work too) */
  createdDateText: React.Component,
  /** Comment text string */
  comment: string,
  /** an array of sectionProps from the DropdownMenu to render the submenu sections */
  actions?: IDropdownMenuSectionProps[]
}

export class Comment extends React.Component<ICommentProps> {
  get avatar (): JSX.Element {
    const {
      avatar
    } = this.props

    return (
      <div className='comment-badge-container'>
        {avatar}
      </div>
    )
  }

  get commentActions (): JSX.Element | null {
    const {
      actions,
      header
    } = this.props

    if (header || !actions) {
      return null
    }

    return (
      <DropdownMenu
        toggleComponent={
          <CommentActionMenuToggleButton>
            <FontAwesomeIcon type='ellipsis-v' />
          </CommentActionMenuToggleButton>
        }
        sections={actions}
      />
    )
  }

  get commentDate (): JSX.Element {
    const {
      createdDateText,
      pill
    } = this.props

    return (
      <div className='comment-header-date'>
        {pill}
        {createdDateText}
      </div>
    )
  }

  get commentTitle (): JSX.Element {
    const {
      submitter,
      header
    } = this.props

    return (
      <div className='comment-header'>
        <span className='comment-header-person-name'>
          {submitter}
        </span>
        {header}
      </div>
    )
  }

  get commentHeader (): JSX.Element {
    const {
      header
    } = this.props

    return (
      <div className={classNames(
        'comment-header-container',
        { 'with-status-update': !(!header) }
      )}>
        {this.commentTitle}

        {this.commentDate}

        {this.commentActions}
      </div>
    )
  }

  get commentContent (): JSX.Element {
    const {
      comment
    } = this.props

    return (
      <div className='comment-content'>
        <FormattedText
          text={comment}
        />
      </div>
    )
  }

  public render (): JSX.Element {
    const {
      focused
    } = this.props

    return (
      <StyledComment>
        {this.avatar}
        <div className={classNames(
          'comment-container',
          { focused }
        )}>
          {this.commentHeader}
          {this.commentContent}
        </div>
      </StyledComment>
    )
  }
}
