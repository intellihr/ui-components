import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Brick } from '../../Typographies/Brick'
import { BrickColor } from '../../Typographies/Brick/style'
import { Text } from '../../Typographies/Text'
import { StyledDeleteButton, TagWrapper } from './style'

export interface IFilterTagDetail {
  field: string
  operator: string
  value: string
}

export interface IFilterTagProps {
  tags: IFilterTagDetail[]
  handleDelete: (option: IFilterTagDetail) => void
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
      <TagWrapper id={`tag-${index}`}>
        <Brick
          typographyType={Props.TypographyType.XSmall}
          color={BrickColor.Neutral}
        >
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.XSmall}
          >
            {`${tag.field} ${tag.operator} `}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.XSmall}
            weight='heavy'
          >
            {tag.value}
          </Text>
          <StyledDeleteButton
            onClick={this.deleteTag(tag)}
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

  private deleteTag = (selectedTag: IFilterTagDetail) => () => {
    const {
      handleDelete
    } = this.props

    handleDelete(selectedTag)
  }
}
