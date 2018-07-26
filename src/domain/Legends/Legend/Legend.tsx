import React from 'react'
import { LegendWrapper, LegendLabel } from './style'
import { FontAwesomeIcon } from '../../Icons'

export interface LegendDataset {
  colour: string
  label: string
}

export interface LegendProps {
  /** The label and colour value for each dataset */
  datasets: LegendDataset[]
}

export class Legend extends React.Component<LegendProps> {
  public static defaultProps: LegendProps = {
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
        {datasets.map((dataset: LegendDataset, i: number) => {
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
