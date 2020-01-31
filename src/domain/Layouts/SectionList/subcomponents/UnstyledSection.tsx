import React from 'react'

import {Props} from '../../../../common'
import {StyledUnstyledSection} from '../style'

export interface ISectionProps {
  /** The data-component-context */
  componentContext?: string
}

class UnstyledSection extends React.PureComponent<ISectionProps> {
  public render (): JSX.Element {
    const {
      children,
      componentContext
    } = this.props

    return (
      <StyledUnstyledSection
        data-component-type={Props.ComponentType.UnstyledSection}
        data-component-context={componentContext}
      >
        {children}
      </StyledUnstyledSection>
    )
  }
}

export {
  UnstyledSection
}
