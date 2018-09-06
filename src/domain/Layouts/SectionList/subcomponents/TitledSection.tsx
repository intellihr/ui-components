import React from 'react'
import { Row } from '../../../Grids/Row'
import {
  StyledTitledSectionDescription,
  StyledTitledSectionHeaderRow,
  StyledTitledSectionActions,
  StyledTitledSectionBody,
  StyledTitledSection
} from '../style'

export interface ITitledSectionProps {
  /** What to display in the layout. */
  children?: React.ReactNode,
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** Action items (eg. buttons) for the header */
  actionItems?: JSX.Element[]
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
      <StyledTitledSection>
        <StyledTitledSectionHeaderRow>
          <StyledTitledSectionDescription
            header={header}
            description={description}
          />
          <StyledTitledSectionActions>
              {actionItems}
          </StyledTitledSectionActions>
        </StyledTitledSectionHeaderRow>
        <Row>
            <StyledTitledSectionBody>
              {children}
            </StyledTitledSectionBody>
        </Row>
      </StyledTitledSection>
    )
  }
}

export {
  TitledSection
}
