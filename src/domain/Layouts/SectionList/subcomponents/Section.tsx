import React from 'react'

import {Props} from '../../../../common'
import {StyledSection} from '../style'

export interface ISectionProps {
  /** The data-component-context */
  componentContext?: string
}

class Section extends React.PureComponent<ISectionProps> {
  public render (): JSX.Element {
    const {
      children,
      componentContext
    } = this.props

    return (
      <StyledSection
        data-component-type={Props.ComponentType.Section}
        data-component-context={componentContext}
      >
        {children}
      </StyledSection>
    )
  }
}

export {
  Section
}
