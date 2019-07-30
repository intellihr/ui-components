import React from 'react'

import { FontAwesomeIcon } from '../../Icons'
import { LegendLabel, LegendWrapper } from './style'

export interface ILegendDataset {
  colour: string
  label: string
}

export interface ILegendProps {
  /** The label and colour value for each dataset */
  datasets: ILegendDataset[]
}

export class Legend extends React.Component<ILegendProps> {
  public static defaultProps: ILegendProps = {
    datasets: []
  }

  public render (): JSX.Element | null {
    const {
      datasets
    } = this.props

    if (!datasets.length) {
      return null
    }

    return (
      <LegendWrapper>
        {datasets.map((dataset: ILegendDataset, i: number) => {
          return (
            <li key={i}>
              <FontAwesomeIcon
                type='circle'
                size='xsmall'
                color={datasets[i].colour}
              />

              <LegendLabel>
                {datasets[i].label}
              </LegendLabel>
            </li>
          )
        })}
      </LegendWrapper>
    )
  }
}
