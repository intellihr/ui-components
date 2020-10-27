import { findLastIndex } from 'lodash'
import React from 'react'

import { Field } from './subcomponents/Field'
import { LeftAlignControls } from './subcomponents/LeftAlignControls'
import { RightAlignControls } from './subcomponents/RightAlignControls'
import { Section } from './subcomponents/Section'
import { StyledSectionWrapper } from './subcomponents/Section/style'

class VerticalForm extends React.PureComponent<React.FormHTMLAttributes<HTMLFormElement>> {
  public static Field = Field
  public static LeftAlignControls = LeftAlignControls
  public static RightAlignControls = RightAlignControls
  public static Section = Section
  public static defaultProps: Partial<HTMLFormElement> = {
    autoComplete: 'off'
  }

  public render (): JSX.Element {
    const {
      onSubmit,
      onChange,
      autoComplete,
      children
    } = this.props
    let wrappedChildren = children

    const childrenArray = React.Children.toArray(children)
    const lastSectionIndex = findLastIndex(childrenArray, (child: any) => {
      return child && child?.type && child?.type?.name === Section.name
    })

    if (lastSectionIndex >= 0) {
      wrappedChildren = React.Children.map(
        children,
        (child: any, index) => {
          if ((lastSectionIndex !== index) && child && child?.type && child?.type?.name === Section.name) {
            return (
              <StyledSectionWrapper>{child}</StyledSectionWrapper>
            )
          }

          return child
        }
      )
    }

    return (
      <form
        onSubmit={onSubmit}
        onChange={onChange}
        autoComplete={autoComplete}
      >
        {wrappedChildren}
      </form>
    )
  }
}

export {
  VerticalForm
}
