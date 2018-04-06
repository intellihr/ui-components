import React from 'react'

export interface CommentProps {
  comment: string
}

export const Comment: React.SFC<CommentProps> = props => (
  <div>
    {props.comment}
  </div>
)