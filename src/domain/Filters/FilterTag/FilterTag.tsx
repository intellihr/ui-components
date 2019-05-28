import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Brick } from '../../Typographies/Brick'
import { BrickColor } from '../../Typographies/Brick/style'
import { Text } from '../../Typographies/Text'
import { StyledDeleteButton, TagWrapper } from './style'

export interface IFilterTagOption {
  field: string
  operator: string
  value: string
}

export interface IFilterTagProps {
  options: IFilterTagOption[]
  handleDelete: (option: IFilterTagOption) => void
}

export class FilterTag extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      options
    } = this.props

    if (options) {
      return (
        <>
          {options.map((option, index) => this.renderTag(option, index))}
        </>
      )
    }

    return null
  }

  private renderTag = (option: IFilterTagOption, index: number) => {
    return (
      <TagWrapper id={`tag-${index}`}>
        <Brick
          typographyType={Props.TypographyType.XSmall}
          color={BrickColor.Neutral}
        >
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.XSmall}
          >
            {`${option.field} ${option.operator} `}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.XSmall}
            weight='heavy'
          >
            {option.value}
          </Text>
          <StyledDeleteButton
            onClick={this.deleteTag(option)}
          >
            <FontAwesomeIcon
              size='xsmall'
              type='times'
              color={Variables.Color.n600}
            />
          </StyledDeleteButton>
        </Brick>
      </TagWrapper>
    )
  }

  private deleteTag = (option: IFilterTagOption) => () => {
    const {
      handleDelete
    } = this.props

    handleDelete(option)
  }
}
