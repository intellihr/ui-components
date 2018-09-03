import React from 'react'
import { Row } from '../../../Grids/Row'
import {
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody,
  SectionBorder
} from '../style'

export interface IAnnotatedSectionProps {
  /** What to display in the layout. */
  children?: React.ReactNode,
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** The text for the call to action */
  linkText?: string,
  /** Where the call to action goes to */
  linkUrl?: string,
  /** Any extra anchor component props */
  anchorComponentProps?: {
    [i: string]: any
  }
}

class AnnotatedSection extends React.Component<IAnnotatedSectionProps> {
  public render (): JSX.Element | null {
    const {
      children,
      header,
      description,
      linkText,
      linkUrl,
      anchorComponentProps
    } = this.props

    return (
      <SectionBorder>
        <Row>
          <Row.Column sm={12} md={4}>
            <StyledAnnotatedSectionDescription
              header={header}
              description={description}
              linkText={linkText}
              linkUrl={linkUrl}
              anchorComponentProps={anchorComponentProps}
            />
          </Row.Column>
          <Row.Column sm={12} md={8}>
            <StyledAnnotatedSectionBody>
              {children}
            </StyledAnnotatedSectionBody>
          </Row.Column>
        </Row>
      </SectionBorder>
    )
  }
}

export {
  AnnotatedSection
}
