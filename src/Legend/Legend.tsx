import React from 'react'
import { Icon } from '../Icon'

const style = require('./style.scss')

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
      <ul className={style.legendClass}>
        {datasets.map((dataset: LegendDataset, i: number) => {
          return (
            <li key={i}>
              <Icon
                type='circle'
                size={1}
                color={datasets[i].colour}
              />

              <span className='legend-label'>
                {datasets[i].label}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
}
