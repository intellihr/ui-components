import React from 'react'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { Avatar } from '../Avatar'
import { DropdownMenu } from '../DropdownMenu'
import { DefaultDropdownButton } from './style'
import { FontAwesomeIcon } from '../Icon/FontAwesomeIcon'
import { FormattedText } from '../FormattedText'
import { sectionProps } from '../DropdownMenu/DropdownMenu'
import { Button } from '../Button'
const style = require('./style.scss')

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
  actions?: sectionProps[],
  /** Handler for the Comment Edit event */
  handleEdit?: (event: React.SyntheticEvent<any>) => void,
  /** Handler for the Comment Delete event */
  handleDelete?: (event: React.SyntheticEvent<any>) => void,
  idx: number,
  alternatingColours?: boolean
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
          <DefaultDropdownButton>
            <FontAwesomeIcon type='ellipsis-v' />
          </DefaultDropdownButton>
        }
        dropdownOverrides={{
          align: 'left'
        }}
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

  get commenterName (): JSX.Element {
    const {
      comment: {
        personId,
        personDisplayName
      },
      loggedInUser: {
        id: loggedInUserId
      }
    } = this.props

    return (
      <strong className='comment-header-person-name'>
        {personId === loggedInUserId ? 'You' : personDisplayName}
      </strong>
    )
  }

  get commentHeader (): JSX.Element {
    const {
      comment: {
        header
      }
    } = this.props
    return (
      <div className='comment-header-container'>
        {this.commenterName}
        {header}

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
        id: commentId,
        personId: commenterId
      },
      loggedInUser: {
        id: loggedInUserId
      },
      idx,
      alternatingColours
    } = this.props

    return (
      <div id={idx.toString()} className={classNames(style.Comment)}>
        {this.avatar}
        <div className={classNames(
          'comment-content-container',
          {
            secondary: alternatingColours && (idx % 2 === 1),
            target: this.targetCommentId === commentId,
            'logged-in-user': commenterId === loggedInUserId
          }
        )}>
          {this.commentHeader}
          {this.commentContent}
        </div>
      </div>
    )
  }
}
