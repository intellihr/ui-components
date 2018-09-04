import React from 'react'
import { Row } from '../../../Grids/Row'
import {
  StyledSectionDescription,
  StyledTitledSectionActions,
  StyledTitledSectionBody,
  StyledAnnotatedSection
} from '../style'

export interface ITitledSectionProps {
  /** What to display in the layout. */
  children?: React.ReactNode,
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** Action items (eg. buttons) for the header */
  actionItems?: JSX.Element
}

class TitledSection extends React.Component<ITitledSectionProps> {
  public render (): JSX.Element | null {
    const {
      children,
      header,
      description,
      actionItems
    } = this.props

    return (
      <StyledAnnotatedSection>
        <Row>
          <Row.Column sm={12} md={8}>
            <StyledSectionDescription
              header={header}
              description={description}
            />
          </Row.Column>
          <Row.Column sm={12} md={4}>
            <StyledTitledSectionActions>
              {actionItems}
            </StyledTitledSectionActions>
          </Row.Column>
        </Row>
        <Row>
          <Row.Column>
            <StyledTitledSectionBody>
              {children}
            </StyledTitledSectionBody>
          </Row.Column>
        </Row>
      </StyledAnnotatedSection>
    )
  }
}

export {
  TitledSection
}
