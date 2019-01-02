import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Variables } from '../../../common'

const StyledComment = styled.div`
  display: flex;
  flex-flow: row;
  margin: 1.125rem 0;

  >.comment-badge-container {
    align-self: flex-start;
    padding: .5rem;
  }

  >.comment-container {
    align-self: stretch;
    background-color: ${Variables.Color.n200};
    border-radius: .75rem;
    flex-grow: 1;
    padding: .85rem 1.2rem;
    
    &.focused {     
        background-color: ${Variables.Color.i100};
    }

    >.comment-header-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: baseline;

      >.comment-header{
        >.comment-header-person-name {
          display: inline-block; // This is added for the weird span -2px height
          font-size: ${Variables.FontSize.fzBody}px;
          font-weight: ${Variables.FontWeight.fwHeavy};
          line-height: ${Variables.LineHeight.lhBody}px;
        }
      }

      >.comment-header-date {
        color: ${Variables.Color.n600};
        flex-grow: 1;
        font-size: ${Variables.FontSize.fzXSmall}px;
        line-height: ${Variables.LineHeight.lhXSmall}px;
        margin-left: .4rem;

        >* {
          display: inline;
          margin: 0 .225rem;
        }
      }

      &.with-status-update {
        >.comment-header {
          flex-grow: 1;
        }
        >.comment-header-date {
          width: 100%;
          margin-left: -.15rem;
          margin-top: 1rem;
        }
      }
    }

    >.comment-content {
      margin-top: .5rem;
      word-break: break-word;
    }
  }
`

const CommentActionMenuToggleButton = styled.button`
  background-color: transparent;
  color: ${Variables.Color.n700};
  cursor: pointer;
  padding: .2rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${Variables.Color.n300};
    color: ${Variables.Color.n800};
    outline: none;
  }

  .fa {
    font-size: ${Variables.FontSize.fzBody}px;
    line-height: ${Variables.LineHeight.lhBody}px;
    margin: 0;
    width: 1.3em;
  }
`

export {
  StyledComment,
  CommentActionMenuToggleButton
}
