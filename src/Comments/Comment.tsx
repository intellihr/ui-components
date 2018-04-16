import React from 'react'
import classNames from 'classnames'

import { PersonBadge } from '../PersonBadge/PersonBadge'

export interface CommentProps {
  comment: {
    id: string,
    comment: string,
    header?: React.Component,
    personDisplayName: string,
    personFirtsName: string,
    personPreferredOrFirstName: string,
    createdAt: string,
    personId: string,
    personProfilePictureId?: string,
    label: React.Component | JSX.Element
  }
  loggedInUser: {
    id: string
  }
  idx: number
  alternatingColours?: boolean
}

export class Comment extends React.Component<CommentProps> {
  render (): JSX.Element {
    const {
      comment
      // idx,
      // alternatingColours
    } = this.props

    return (
      <div id={comment.id} className={classNames()}>
        <div className='comment-badge-container'>
          <PersonBadge
            size='small'
            preferredOrFirstName={comment.personPreferredOrFirstName}
            lastName={comment.personFirtsName}
          />
        </div>
      </div>
    )
  }
}