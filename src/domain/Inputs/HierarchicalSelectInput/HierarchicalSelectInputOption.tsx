import React from 'react'
import Select, {
  OptionComponentProps
} from 'react-select'
import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../../Typographies/services/textStyles'
import { TextMatch } from './TextMatch'

const StyledOptionLabelWrapper = styled.div`
  margin-right: ${Variables.Spacing.sMedium}px;
  text-overflow: ellipsis;
`

const StyledOptionParentLabelWrapper = styled.div`
  word-break: break-all;
  ${styleForTypographyType(Props.TypographyType.Small)}
`

interface IOption {
  label: string
  parentOption?: IOption
}

const parentDisplay = (option: IOption): string => {
  if (!option.parentOption) {
    return option.label
  }

  return `${parentDisplay(option.parentOption)}/${option.label}`
}

const HierarchicalSelectInputOption: React.FC<OptionComponentProps> = (props) => {
  const {
    option,
    inputValue
  } = props

  const OptionComponent = (Select as any).Option

  return (
    <OptionComponent
      {...props}
      option={option}
    >
      {option.parentOption && (
        <StyledOptionParentLabelWrapper>
          {parentDisplay(option.parentOption)}
        </StyledOptionParentLabelWrapper>
      )}
      <StyledOptionLabelWrapper>
        <TextMatch
          otherTextProps={{ type: Props.TypographyType.Small, color: Variables.Color.n800 }}
          matchTextProps={{ type: Props.TypographyType.Small, weight: Variables.FontWeight.fwSemiBold }}
          mainText={option.label}
          searchText={inputValue}
        />
      </StyledOptionLabelWrapper>
    </OptionComponent>
  )
}

export {
  HierarchicalSelectInputOption
}
