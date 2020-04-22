import React from 'react'
import Select, {
  OptionComponentProps
} from 'react-select'
import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../../../domain/Typographies/services/textStyles'

const StyledOption = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledOptionLabelWrapper = styled.span<{ depth: number }>`
  flex: 1 1 0;
  margin-left: ${(props) => props.depth * Variables.Spacing.sMedium}px;
  margin-right: ${Variables.Spacing.sMedium}px;
  text-overflow: ellipsis;
`

const StyledOptionParentLabelWrapper = styled.span`
  background-color: ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;
  flex: 0 1 auto;
  align-self: baseline;
  max-width: 200px;
  overflow: hidden;
  padding-left: ${Variables.Spacing.s2XSmall}px;
  padding-right: ${Variables.Spacing.s3XSmall}px;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${styleForTypographyType(Props.TypographyType.Small)}
`

const HierarchicalSelectInputOption: React.FC<OptionComponentProps> = (props) => {
  const {
    option,
    inputValue
  } = props

  const OptionComponent = (Select as any).Option
  const isFiltering = inputValue !== ''

  return (
    <OptionComponent
      {...props}
      option={option}
    >
      <StyledOption>
        <StyledOptionLabelWrapper depth={isFiltering ? 0 : option.depth}>
          {option.label}
        </StyledOptionLabelWrapper>
        {isFiltering && option.parentOption && (
          <StyledOptionParentLabelWrapper>
            {option.parentOption.label}
          </StyledOptionParentLabelWrapper>
        )}
      </StyledOption>
    </OptionComponent>
  )
}

export {
  HierarchicalSelectInputOption
}
