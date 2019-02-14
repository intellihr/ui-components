import React from 'react'

import { XYGrid } from '../../XYGrid'
import {
  StyledTitledSection,
  StyledTitledSectionBody,
  StyledTitledSectionDescription,
  StyledTitledSectionHeaderRow
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
        <XYGrid>
          <XYGrid.Cell size={{ min: 12 }}>
            <StyledTitledSectionHeaderRow>
              <XYGrid verticalAlignment={XYGrid.VerticalAlignment.Middle}>
                <XYGrid.Cell size={{ desktop: 'auto', tablet: 'auto', min: 12 }}>
                  <StyledTitledSectionDescription
                    header={header}
                    description={description}
                  />
                </XYGrid.Cell>
                <XYGrid.Cell size={{ desktop: 'shrink', tablet: 'shrink', min: 12 }}>
                  {actionItems}
                </XYGrid.Cell>
              </XYGrid>
            </StyledTitledSectionHeaderRow>
          </XYGrid.Cell>
          {children &&
            <XYGrid.Cell size={{ min: 12 }}>
              <StyledTitledSectionBody>
                {children}
              </StyledTitledSectionBody>
            </XYGrid.Cell>
          }
        </XYGrid>
      </StyledTitledSection>
    )
  }
}

export {
  TitledSection
}
