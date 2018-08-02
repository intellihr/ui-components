import React from 'react'
import classNames from 'classnames'
import { Avatar } from '@Domain/Avatars'
import {
  DropdownMenu,
  IDropdownMenuSectionProps
} from '@Domain/Menus'
import {
  StyledComment,
  CommentActionMenuToggleButton
} from './style'
import { FontAwesomeIcon } from '@Domain/Icons'
import { FormattedText } from '@Domain/Typographies'
import { Props } from '@Common/types'

export interface CommentProps {
  /** Comment object to render */
  comment: {
    /** Comment ID (UUID) */
    id: string,
    /** Comment text string */
    comment: string,
    /** Additional text to display in the array header (preferable a span HTML element) */
    header?: React.Component,
    /** Commenter full name */
    personDisplayName: string,
    /** Commenter's initials to display in Avatar */
    commenterInitials?: string
    /** Use DateText component from the list of alreay defined components (a string should work too) */
    createdDateText: React.Component,
    /** Commenter person ID */
    personId: string,
    /** Commenter Image URL, if null or empty, will display initials */
    avatarUrl?: string,
    /** A label to be displayed right before the date label of the comment (use a span to persist the inline diplay behaviour) */
    label?: React.Component
  }
  loggedInUser: {
    id: string
  },
  /** an array of sectionProps from the DropdownMenu to render the submenu sections */
  actions?: IDropdownMenuSectionProps[]
}

export class Comment extends React.Component<CommentProps> {
  get avatar (): JSX.Element {
    const {
      commenterInitials,
      avatarUrl
    } = this.props.comment

    return (
      <div className='comment-badge-container'>
        <Avatar
          size='small'
          imageUrl={avatarUrl}
          initials={commenterInitials}
        />
      </div>
    )
  }

  get commentActions (): JSX.Element | null {
    const {
      actions,
      comment: {
        header: commentHeader
      }
    } = this.props

    if (commentHeader || !actions) {
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
      comment: {
        createdDateText,
        label
      }
    } = this.props

    return (
      <div className='comment-header-date'>
        {label}
        {createdDateText}
      </div>
    )
  }

  get commentTitle (): JSX.Element {
    const {
      comment: {
        personId,
        personDisplayName,
        header
      },
      loggedInUser: {
        id: loggedInUserId
      }
    } = this.props

    return (
      <div className='comment-header'>
        <span className='comment-header-person-name'>
          {personId === loggedInUserId ? 'You' : personDisplayName}
        </span>
        {header}
      </div>
    )
  }

  get commentHeader (): JSX.Element {
    const {
      comment: { header }
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

  get targetCommentId () {
    return window.location.hash.substr(1)
  }

  get commentContent (): JSX.Element {
    const {
      comment
    } = this.props.comment

    return (
      <div className='comment-content'>
        <FormattedText
          text={comment}
        />
      </div>
    )
  }

  render (): JSX.Element {
    const {
      comment: {
        id: commentId
      }
    } = this.props

    return (
      <StyledComment>
        {this.avatar}
        <div className={classNames(
          'comment-container',
          { target: this.targetCommentId === commentId }
        )}>
          {this.commentHeader}
          {this.commentContent}
        </div>
      </StyledComment>
    )
  }
}
