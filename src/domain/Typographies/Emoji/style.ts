import styled, { css } from 'styled-components'
import { Props } from '../../../common'
import { styleForTypographyType } from '../services/textStyles'

export interface IEmojiWrapperProps {
  textType?: Props.TypographyType
}

const EmojiWrapper = styled.span`
  ${(props: IEmojiWrapperProps) => styleForTypographyType(props.textType)}
  
     > span {
       line-height: 14px;
       vertical-align: middle;
       margin-top: -0.13em;
       display: inline-block;
     }  
`

export {
  EmojiWrapper
}
