import React, { PureComponent } from 'react'

import { Variables } from '../../../common'
import { SmartList } from '../../Lists'
import { StyledExample } from './style'

class ExampleLayoutVariables extends PureComponent<never> {
  public render (): JSX.Element {
    return (
      <SmartList
        data={[
          {
            variableName: 'Variables.Layout.l2XSmall',
            variable: Variables.Layout.l2XSmall
          },
          {
            variableName: 'Variables.Layout.lXSmall',
            variable: Variables.Layout.lXSmall
          },
          {
            variableName: 'Variables.Layout.lSmall',
            variable: Variables.Layout.lSmall
          },
          {
            variableName: 'Variables.Layout.lMedium',
            variable: Variables.Layout.lMedium
          },
          {
            variableName: 'Variables.Layout.lLarge',
            variable: Variables.Layout.lLarge
          },
          {
            variableName: 'Variables.Layout.lXLarge',
            variable: Variables.Layout.lXLarge
          },
          {
            variableName: 'Variables.Layout.l2XLarge',
            variable: Variables.Layout.l2XLarge
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
  ExampleLayoutVariables
}
