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
  /** The title for what is displayed */
  header?: string,
  /** The description for what is displayed */
  description?: string,
  /** Action items (eg. buttons) for the header */
  actionItems?: JSX.Element[]
}

class TitledSection extends React.PureComponent<ITitledSectionProps> {
  public render (): JSX.Element {
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
