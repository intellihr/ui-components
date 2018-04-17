import React from 'react'
import classNames from 'classnames'
import { PersonBadge } from '../PersonBadge/PersonBadge'
const style = require('./style.scss')

export interface CommentProps {
  comment: {
    id: string,
    comment: string,
    header?: React.Component,
    personDisplayName: string,
    personFirstName: string,
    personPreferredOrFirstName: string,
    createdDateString: string,
    personId: string,
    personProfilePictureId?: string,
    label?: React.Component
  }
  loggedInUser: {
    id: string
  }
  idx: number
  alternatingColours?: boolean
}

export class Comment extends React.Component<CommentProps> {
  get personProfilePicture (): JSX.Element {
    const {
      personFirstName,
      personPreferredOrFirstName,
      personProfilePictureId
    } = this.props.comment

    return (
      <div className='comment-badge-container'>
        <PersonBadge
          size='small'
          imageId={personProfilePictureId}
          preferredOrFirstName={personPreferredOrFirstName}
          lastName={personFirstName}
        />
      </div>
    )
  }

  get ownerLabel (): JSX.Element | null {
    const {
      comment: {
        personId: commenterId
      },
      loggedInUser: {
        id: loggedInUserId
      }
    } = this.props

    if (commenterId === loggedInUserId) {
      return <div className='comment-header-owner-label'>Owner</div>
    }

    return null
  }

  get commentDate (): JSX.Element {
    const {
      comment: {
        createdDateString
      }
    } = this.props

    return (
      <div className='comment-header-date'>
        {createdDateString}
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
        header,
        label
      }
    } = this.props
    return (
      <div className='comment-header-container'>
        {this.commenterName}
        {header}

        {this.ownerLabel}

        {this.commentDate}
        {label}
      </div>
    )
  }

  get commentContent (): JSX.Element {
    const {
      comment
    } = this.props.comment

    return (
      <div className='comment-content'>
        {comment}
      </div>
    )
  }

  render (): JSX.Element {
    const {
      comment
      // idx,
      // alternatingColours
    } = this.props

    return (
      <div id={comment.id} className={classNames(style.Comment)}>
        {this.personProfilePicture}
        <div className='comment-content-container'>
          {this.commentHeader}
          {this.commentContent}
        </div>
      </div>
    )
  }
}
