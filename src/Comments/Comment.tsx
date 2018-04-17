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
    createdAt: string,
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
    return (
      <div className='comment-header-date'>
        25 minutes ago
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

    console.log(personId, loggedInUserId)

    return (
      <strong className='comment-header-person-name'>
        {personId === loggedInUserId ? 'You' : personDisplayName}
      </strong>
    )
  }

  get commentHeaderMeta (): React.Component | null {
    const {
      comment: {
        header
      }
    } = this.props

    if (header) {
      return header
    }

    return null
  }

  get commentHeaderLabel (): React.Component | null {
    const {
      comment: {
        label
      }
    } = this.props

    if (label) {
      return label
    }

    return null
  }

  get commentHeader (): JSX.Element {
    return (
      <div className='comment-header-container'>
        {this.commenterName}
        {this.commentHeaderMeta}

        {this.ownerLabel}
        
        {this.commentDate}
        {this.commentHeaderLabel}
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