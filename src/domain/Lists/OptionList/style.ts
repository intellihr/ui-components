import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

interface IOptionListWrapper {
  maxHeight?: number
  width?: string
}

interface IOptionListButton {
  selected?: boolean
  hidden: boolean
  truncatedText?: boolean
}

const OptionListWrapper = styled.div`
  ${(props: IOptionListWrapper) => {
    if (props.maxHeight) {
      return css`
        max-height: ${props.maxHeight}px;
        overflow-y: auto;
      `
    }

    return css`max-height: none`
  }}

  ${(props: IOptionListWrapper) => {
    if (props.width) {
      return css`width: ${props.width}px;`
    }

    return css`width: auto;`
  }}
`

const StyledEmptyState = styled.div`
  text-align: center;
  padding: 0 24px;
`

const OptionListButton = styled.button`
  background-color: ${Variables.Color.n100};
  color: ${Variables.Color.n800};
  display: block;
  font-size: ${Variables.FontSize.fzBody}px;
  line-height: ${Variables.LineHeight.lhBody}px;
  width: 100%;
  padding: 8px;
  text-align: left;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Variables.Color.n200};
  }

  ${(props: IOptionListButton) => props.selected && css `
    background-color: ${Variables.Color.i100};
    color: ${Variables.Color.i600};

    &:hover,
    &:focus {
      background-color: ${Variables.Color.i100};
    }
  `}

  ${(props: IOptionListButton) => props.truncatedText && css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

  ${(props: IOptionListButton) => props.hidden && css`display: none;`}
`

const OptionListLeftComponent = styled.span`
  margin-right: 8px;
`

const OptionListRightComponent = styled.span`
  margin-left: 8px;
`

export {
  StyledEmptyState,
  OptionListWrapper,
  OptionListButton,
  OptionListLeftComponent,
  OptionListRightComponent
}
