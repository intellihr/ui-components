import React from 'react'
import classNames from 'classnames'

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
        Whaaaazzzaaaa
      </div>
    )
  }
}