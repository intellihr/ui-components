import React, { Fragment } from 'react'

import { Props, Variables } from '../../../common'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { Brick } from '../../Typographies/Brick'
import { BrickColor } from '../../Typographies/Brick/style'
import { Text } from '../../Typographies/Text'
import { StyledCross, StyledDeleteButton, StyledFilterTag } from './style'

interface IFieldValue {
  label: string
  value: string
}

interface IFilterTagDetail {
  fieldName: string
  label: string
  type: 'equality' | 'range'
  fieldValues: IFieldValue[]
}

interface IFilterTagProps {
  tags: IFilterTagDetail[]
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
  /** The data-component-context */
  componentContext?: string
}

const FilterTag: React.FC<IFilterTagProps> = ({tags, componentContext, onTagDeleted}) => {
  if (tags) {
    return (
      <StyledFilterTag
        data-component-type={Props.ComponentType.FilterTag}
        data-component-context={componentContext}
      >
        {tags.map((tag) => {
          return (
            <Brick
              key={`tag-${tag.fieldName}`}
              margins={{right: Variables.Spacing.sXSmall,  bottom: Variables.Spacing.s2XSmall}}
              typographyType={Props.TypographyType.Small}
              color={BrickColor.Neutral}
            >
              <Text
                color={Variables.Color.n800}
                type={Props.TypographyType.Small}
              >
                {tag.label}
              </Text>
              <TagValue tag={tag} />
              <StyledDeleteButton
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => onTagDeleted(tag)}
              >
                <StyledCross>×</StyledCross>
              </StyledDeleteButton>
            </Brick>
          )
        })}
      </StyledFilterTag>
    )
  }

  return null
}

interface ITagValueProps {
  tag: IFilterTagDetail
}

const TagValue: React.FC<ITagValueProps> = ({tag}) => {
  const t = useTranslateFunction()

  if (tag.type === 'range') {
    if (tag.fieldValues.length === 2) {
      return (
        <>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
          >
            {` ${t('filterTag.from', {defaultValue: 'from'})} `}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
            weight={Variables.FontWeight.fwSemiBold}
          >
            {tag.fieldValues[0].label}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
          >
            {` ${t('filterTag.to', {defaultValue: 'to'})} `}
          </Text>
          <Text
            color={Variables.Color.n800}
            type={Props.TypographyType.Small}
            weight={Variables.FontWeight.fwSemiBold}
          >
            {tag.fieldValues[1].label}
          </Text>
        </>
      )
    } else {
      throw Error('Tag should have two field values when its type is range')
    }
  }

  if (tag.type === 'equality') {
    return (
      <>
        <Text
          color={Variables.Color.n800}
          type={Props.TypographyType.Small}
        >
          {` ${t('filterTag.is', {defaultValue: 'is'})} `}
        </Text>
        {
          tag.fieldValues.map((fieldValue, index) => {
            return (
              <Fragment key={fieldValue.value}>
                {index !== 0 && (
                  <Text color={Variables.Color.n800} type={Props.TypographyType.Small}>
                    {` ${t('filterTag.or', {defaultValue: 'or'})} `}
                  </Text>
                )}
                <Text
                  color={Variables.Color.n800}
                  type={Props.TypographyType.Small}
                  weight={Variables.FontWeight.fwSemiBold}
                >
                  {fieldValue.label}
                </Text>
              </Fragment>
            )
          })
        }
      </>
    )
  }

  return null
}

export {
  IFilterTagDetail,
  FilterTag,
  IFieldValue
}
