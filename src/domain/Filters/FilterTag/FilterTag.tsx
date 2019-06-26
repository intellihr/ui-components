import React from 'react'

import { Props, Variables } from '../../../common'
import { Brick } from '../../Typographies/Brick'
import { BrickColor } from '../../Typographies/Brick/style'
import { Text } from '../../Typographies/Text'
import { StyledCross, StyledDeleteButton } from './style'

interface IFieldValue {
  label: string
  value: string
}

interface IFilterTagDetail {
  field: string
  label: string
  operator?: 'is' | 'from'
  fieldValues: IFieldValue[] | string
}

interface IFilterTagProps {
  tags: IFilterTagDetail[]
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
  /** The data-component-context */
  componentContext?: string
}

class FilterTag extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      tags,
      componentContext
    } = this.props

    if (tags) {
      return (
        <div
          data-component-type={Props.ComponentType.FilterTag}
          data-component-context={componentContext}
        >
          {tags.map((tag) => this.renderTag(tag))}
        </div>
      )
    }

    return null
  }

  private renderTag = (tag: IFilterTagDetail) => {
    return (
      <Brick
        key={`tag-${tag.field}`}
        margins={{right: Variables.Spacing.sXSmall}}
        typographyType={Props.TypographyType.Small}
        color={BrickColor.Neutral}
      >
        <Text
          color={Variables.Color.n800}
          type={Props.TypographyType.Small}
        >
          {`${tag.label} ${tag.operator} `}
        </Text>
        {this.tagValue(tag)}
        <StyledDeleteButton
          onClick={this.deleteTag(tag)}
        >
          <StyledCross>×</StyledCross>
        </StyledDeleteButton>
      </Brick>
    )
  }

  private tagValue = (tag: IFilterTagDetail) => {
    if (tag.operator === 'from' && typeof  tag.fieldValues === 'string' && tag.fieldValues.indexOf(',') > 0) {
      const start = tag.fieldValues.split(',')[0]
      const end = tag.fieldValues.split(',')[1]

      return (
        <>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
            weight={Variables.FontWeight.fwSemiBold}
          >
            {start}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
          >
            {' to '}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
            weight={Variables.FontWeight.fwSemiBold}
          >
            {end}
          </Text>
        </>
      )
    }

    if (typeof  tag.fieldValues === 'object') {
      return (
        tag.fieldValues.map((fieldValue, index) => {
          return (
            <>
              {index !== 0 && this.seperator}
              <Text
                key={fieldValue.value}
                color={Variables.Color.n800}
                type={Props.TypographyType.Small}
                weight={Variables.FontWeight.fwSemiBold}
              >
                {fieldValue.label}
              </Text>
            </>
          )
        })
      )
    }
  }

  private get seperator () {
    return (
      <Text
        color={Variables.Color.n800}
        type={Props.TypographyType.Small}
      >
        {' or '}
      </Text>
    )
  }

  private deleteTag = (deletedTag: IFilterTagDetail) => () => {
    const {
      onTagDeleted
    } = this.props

    onTagDeleted(deletedTag)
  }
}

export {
  IFilterTagDetail,
  FilterTag,
  IFieldValue
}
