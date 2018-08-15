import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '../../../common/legacy'

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
    background-color: ${getColor('neutral-light')};
    border-radius: .75rem;
    flex-grow: 1;
    padding: .85rem 1.2rem;

    >.comment-header-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: baseline;

      >.comment-header{
        >.comment-header-person-name {
          font-weight: 600;
        }
      }

      >.comment-header-date {
        color: ${getColor('badge-background-dark')};
        flex-grow: 1;
        font-size: 80%;
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
    }
  }
`

const CommentActionMenuToggleButton = styled.button`
  background-color: transparent;
  color: ${getColor('badge-background-dark')};
  cursor: pointer;
  padding: .2rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${getColor('neutral-base')};
    color: ${getColor('main-text')};
    outline: none;
  }

  .fa {
    font-size: 1rem;
    line-height: 1;
    margin: 0;
    width: 1.3em;
  }
`

export {
  StyledComment,
  CommentActionMenuToggleButton
}
