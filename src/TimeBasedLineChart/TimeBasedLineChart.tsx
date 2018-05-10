import React from 'react'
import { Line, ChartData } from 'react-chartjs-2'
import { merge, get } from 'lodash'
import { getTimeBasedLineChartDefaultOptions } from './chartOptions'
import classNames from 'classnames'
const timeLineChartClass = require('./style.scss')

export interface DataSet {
  x: object,
  y: number | string
}
export interface LineObject {
  dataset: DataSet[]
  lineColor: string
  datasetLabel: string
  isGradient?: boolean
}

export interface ChartLabels {
  [key: string]: string
}

export interface TimeBasedLineChartProps {
  /** Array of labels that are placed along the x-axis */
  labels?: Array<string | string[]>
  /** show X Gridlines or not */
  showXGridLines?: boolean
  /** show X Ticks or not */
  showXTicks?: boolean
  /** show Y Ticks or not */
  showYTicks?: boolean
  /** min Y tick value on Y Axis */
  minYTick?: number
  /** max Y tick value on Y Axis */
  maxYTick: number
  /** The step size of Y Axis */
  yTickStepSize: number
  /** The labels on Y Axis */
  yTickLabels?: ChartLabels
  /** Time format for tooltip */
  timeToolTipFormat: string
  /** Time unit */
  timeUnit: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
  /** Time display format */
  timeDisplayFormat: string
  /** Date format string */
  dateFormat: string
  /** The data for the charts to display, please see the interface */
  data: LineObject[]
  /** Chart Options */
  options?: Chart.ChartOptions
}

export interface ChartTooltipItem {
  xLabel?: string;
  yLabel?: string;
  datasetIndex?: number;
  index?: number;
}

export interface BaseLineChartProps {
  /** Array of labels that are placed along the x-axis  */
  labels?: Array<string | string[]>
  /** Chart Options */
  options: Chart.ChartOptions
  /** The chart title */
  title?: string

  datasets: Chart.ChartDataSets[]
}

export class TimeBasedLineChart extends React.PureComponent<TimeBasedLineChartProps> {
  public static defaultProps: Partial<TimeBasedLineChartProps> = {
    showXTicks: true,
    showXGridLines: true,
    showYTicks: true,
    minYTick: 0
  }

  lineGradient = (lineColor: string) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const gradient = ctx!.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, lineColor.replace(')', ', 0.3)').replace('rgb', 'rgba'))
    gradient.addColorStop(0.9, lineColor.replace(')', ', 0)').replace('rgb', 'rgba'))
    return gradient
  }

  get datasets () {
    const { data } = this.props

    return data.map((dataset: ChartData<any>) => {
      let attributes = {
        label: dataset['datasetLabel'],
        backgroundColor: dataset['lineColor'],
        borderColor: dataset['lineColor'],
        borderWidth: 4,
        pointBackgroundColor: dataset['lineColor'],
        pointBorderColor: dataset['lineColor'],
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverBackgroundColor: dataset['lineColor'],
        pointHitRadius: 10,
        pointHoverRadius: 5,
        lineTension: 0,
        fill: false,
        data: dataset['dataset']
      }

      if (dataset['isGradient']) {
        attributes = merge(attributes, {
          colour: dataset['lineColor'],
          backgroundColor: this.lineGradient(dataset['lineColor']),
          fill: true,
          fillColor: dataset['lineColor']
        })
      }

      return attributes
    })
  }
  render () {
    const {
      labels,
      title
    } = this.props

    return (<BaseLineChart
      datasets={this.datasets}
      options={getTimeBasedLineChartDefaultOptions(this.props)}
      labels={labels}
      title={title}
    />)
  }
}

class BaseLineChart extends React.PureComponent<BaseLineChartProps> {
  render () {
    const {
      title,
      labels,
      options,
      datasets
    } = this.props

    return (
      <div className={classNames(timeLineChartClass, 'line-chart')}>
        {title && (<div className='chart-title'>
          {title}
        </div>)}

        <Line
          data={{
            labels: labels,
            datasets: datasets
          }}
          options={options}
        />
      </div>
    )
  }
}
