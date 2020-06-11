import React from 'react'
import Select, {
  OptionComponentProps
} from 'react-select'
import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies'
import { styleForTruncatedText } from '../../Typographies/services/textStyles'
import { TextMatch } from './TextMatch'

const StyledOptionLabelWrapper = styled.div`
  ${styleForTruncatedText()}
`

const StyledOptionParentLabelWrapper = styled.div`
  word-break: break-all;
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
          <Text type={Props.TypographyType.Small} color={Variables.Color.n700}>
            {parentDisplay(option.parentOption)}
          </Text>
        </StyledOptionParentLabelWrapper>
      )}
      <StyledOptionLabelWrapper>
        <TextMatch
          otherTextProps={{ color: Variables.Color.n800 }}
          matchTextProps={{ weight: Variables.FontWeight.fwSemiBold }}
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
