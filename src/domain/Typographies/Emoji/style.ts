import styled, { css } from 'styled-components'
import { Props } from '../../../common'
import { styleForTypographyType } from '../services/textStyles'

export interface IEmojiWrapperProps {
  textType?: Props.TypographyType
  isFlag: boolean
}

const EmojiWrapper = styled.span`
  ${(props: IEmojiWrapperProps) => styleForTypographyType(props.textType)}
  
  ${(props: IEmojiWrapperProps) => props.isFlag && css`

     > span {
       display: inline-flex;
       vertical-align: middle;
       margin-right: 0.5rem;
     }  
  `}
`

export {
  EmojiWrapper
}
