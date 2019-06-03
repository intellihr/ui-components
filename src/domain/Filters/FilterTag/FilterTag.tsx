import React from 'react'

import { Props, Variables } from '../../../common'
import { Brick } from '../../Typographies/Brick'
import { BrickColor } from '../../Typographies/Brick/style'
import { Text } from '../../Typographies/Text'
import { StyledCross, StyledDeleteButton } from './style'

export interface IFilterTagDetail {
  fieldName: string
  operator: string
  value: string
}

export interface IFilterTagProps {
  tags: IFilterTagDetail[]
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
}

export class FilterTag extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      tags
    } = this.props

    if (tags) {
      return (
        <>
          {tags.map((tag, index) => this.renderTag(tag, index))}
        </>
      )
    }

    return null
  }

  private renderTag = (tag: IFilterTagDetail, index: number) => {
    return (
      <Brick
        key={`tag-${tag.fieldName}-${index}`}
        margins={{right: Variables.Spacing.sXSmall}}
        typographyType={Props.TypographyType.Small}
        color={BrickColor.Neutral}
      >
        <Text
          color={Variables.Color.n800}
          type={Props.TypographyType.Small}
        >
          {`${tag.fieldName} ${tag.operator} `}
        </Text>
        <Text
          color={Variables.Color.n800}
          type={Props.TypographyType.Small}
          weight='heavy'
        >
          {tag.value}
        </Text>
        <StyledDeleteButton
          onClick={this.deleteTag(tag)}
        >
          <StyledCross>×</StyledCross>
        </StyledDeleteButton>
      </Brick>
    )
  }

  private deleteTag = (deletedTag: IFilterTagDetail) => () => {
    const {
      onTagDeleted
    } = this.props

    onTagDeleted(deletedTag)
  }
}
