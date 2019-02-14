import React, { PureComponent } from 'react'

import { Variables } from '../../../common'
import { SmartList } from '../../Lists'
import { StyledExample } from './style'

class ExampleSpacingVariables extends PureComponent<never> {
  public render (): JSX.Element {
    return (
      <SmartList
        data={[
          {
            variableName: 'Variables.Spacing.s3XSmall',
            variable: Variables.Spacing.s3XSmall
          },
          {
            variableName: 'Variables.Spacing.s2XSmall',
            variable: Variables.Spacing.s2XSmall
          },
          {
            variableName: 'Variables.Spacing.sXSmall',
            variable: Variables.Spacing.sXSmall
          },
          {
            variableName: 'Variables.Spacing.sSmall',
            variable: Variables.Spacing.sSmall
          },
          {
            variableName: 'Variables.Spacing.sMedium',
            variable: Variables.Spacing.sMedium
          },
          {
            variableName: 'Variables.Spacing.sLarge',
            variable: Variables.Spacing.sLarge
          },
          {
            variableName: 'Variables.Spacing.sXLarge',
            variable: Variables.Spacing.sXLarge
          },
          {
            variableName: 'Variables.Spacing.s2XLarge',
            variable: Variables.Spacing.s2XLarge
          },
          {
            variableName: 'Variables.Spacing.s3XLarge',
            variable: Variables.Spacing.s3XLarge
          }
        ]}
        showHoverBg={false}
        limit={null}
      >
        <SmartList.Column
          size={{
            md: 6,
            lg: 6
          }}
          header='Variable'
          cell={this.variableCell}
        />

        <SmartList.Column
          size={{
            md: 3,
            lg: 3
          }}
          header='px'
          cell={this.pxCell}
        />

        <SmartList.Column
          size={{
            md: 3,
            lg: 3
          }}
          header='Example'
          cell={this.exampleCell}
        />
      </SmartList>
    )
  }

  private variableCell = (row: any) => row.variableName

  private pxCell = (row: any) => row.variable

  private exampleCell = (row: any) => <StyledExample size={row.variable}/>
}

export {
  ExampleSpacingVariables
}
