import React from 'react'
import { Row } from '../../../Grids/Row'
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
        <Row>
          <Row.Column sm={12} md={4}>
            <StyledAnnotatedSectionDescription
              header={header}
              description={description}
              linkText={linkText}
              linkProps={linkProps}
            />
          </Row.Column>
          {children &&
            <Row.Column sm={12} md={8}>
              <StyledAnnotatedSectionBody>
                {children}
              </StyledAnnotatedSectionBody>
            </Row.Column>
          }
        </Row>
      </StyledAnnotatedSection>
    )
  }
}

export {
  AnnotatedSection
}
