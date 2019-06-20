import classNames from 'classnames'
import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import {
  DropdownMenu,
  IDropdownMenuSectionProps,
  IDropdownMenuToggleComponentProps
} from '../../Popovers'
import { FormattedText } from '../../Typographies'
import {
  CommentActionMenuToggleButton,
  StyledComment
} from './style'

export interface ICommentProps {
  /** the name of the person who posted the comment */
  commentHeaderText: string,
  /** Displays the comment in a focused state */
  focused?: boolean,
  /** The component to render to the left of the comment box */
  avatarComponent: JSX.Element,
  /** A pill to be displayed right before the date label of the comment (use a span to persist the inline diplay behaviour) */
  pillComponent?: JSX.Element,
  /** Additional text to display in the array header (preferable a span HTML element) */
  headerComponent?: JSX.Element,
  /** Use DateText component from the list of alreay defined components (a string should work too) */
  dateComponent: JSX.Element,
  /** Comment text string */
  commentBodyText: string,
  /** an array of sectionProps from the DropdownMenu to render the submenu sections */
  actions?: IDropdownMenuSectionProps[]
  /** Margins around the component */
  margins?: Props.IMargins
}

export const Comment: React.FC<ICommentProps> = ({
  focused,
  avatarComponent,
  headerComponent,
  commentHeaderText,
  pillComponent,
  dateComponent,
  actions,
  commentBodyText,
  margins
}) => {
  const DropdownMenuToggleComponent = (props: IDropdownMenuToggleComponentProps) => {
    return (
      <CommentActionMenuToggleButton
        type='button'
        onClick={props.toggleMenu}
        innerRef={props.toggleComponentRef}
        {...props.ariaProps}
      >
        <FontAwesomeIcon type='ellipsis-v' />
      </CommentActionMenuToggleButton>
    )
  }

  return (
    <StyledComment margins={margins}>
      <div className='comment-badge-container'>
        {avatarComponent}
      </div>
      <div
        className={classNames(
          'comment-container',
          { focused }
        )}
      >
        <div
          className={classNames(
            'comment-header-container',
            { 'with-status-update': !(!headerComponent) }
          )}
        >
          <div className='comment-header'>
            <span className='comment-header-person-name'>
              {commentHeaderText}
            </span>
            {headerComponent}
          </div>

          <div className='comment-header-date'>
            {pillComponent}
            {dateComponent}
          </div>

          {(!headerComponent && actions) && (
            <DropdownMenu
              toggleComponent={DropdownMenuToggleComponent}
              sections={actions}
            />
          )}
        </div>
        <div className='comment-content'>
          <FormattedText
            text={commentBodyText}
          />
        </div>
      </div>
    </StyledComment>
  )
}
