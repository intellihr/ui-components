import React from 'react'
import { XYGrid } from '../../XYGrid'
import {
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody,
  StyledAnnotatedSection
} from '../style'

export interface IAnnotatedSectionProps {
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** The text for the call to action */
  linkText?: string,
  /** Any extra link props */
  linkProps?: {
    [i: string]: any
  }
}

class AnnotatedSection extends React.PureComponent<IAnnotatedSectionProps> {
  public render (): JSX.Element {
    const {
      children,
      header,
      description,
      linkText,
      linkProps
    } = this.props

    return (
      <StyledAnnotatedSection>
        <XYGrid>
          <XYGrid.Cell size={{ desktop: 4, tablet: 4, min: 12 }}>
            <StyledAnnotatedSectionDescription
              header={header}
              description={description}
              linkText={linkText}
              linkProps={linkProps}
            />
          </XYGrid.Cell>
          {children &&
            <XYGrid.Cell size={{ desktop: 8, tablet: 8, min: 12 }}>
              <StyledAnnotatedSectionBody>
                {children}
              </StyledAnnotatedSectionBody>
            </XYGrid.Cell>
          }
        </XYGrid>
      </StyledAnnotatedSection>
    )
  }
}

export {
  AnnotatedSection
}
