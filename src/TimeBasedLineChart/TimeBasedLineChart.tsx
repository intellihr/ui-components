import React from 'react'
import { Line, ChartData } from 'react-chartjs-2'
import { merge, get } from 'lodash'
import { getTimeBasedLineChartDefaultOptions } from './chartOptions'

export interface DataSet {
  x: object,
  y: number | string
}
export interface LineObject {
  dataset: DataSet[]
  lineColor: string
  datasetLabel: string
  isGradient?: boolean
  backgroundColor?: string | CanvasGradient | CanvasPattern | string[]
}

export interface ChartLabels {
  [key: string]: string
}

export interface TimeBasedLineChartProps {
  /** Array of labels that are placed along the x-axis */
  labels?: Array<string | string[]>
  /** show X Gridlines or not */
  showXGridLines?: boolean
  /** show Y Gridlines or not */
  showYGridLines?: boolean
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
  /** The labels on Y Axis ticks */
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
  /** Chart Width */
  width?: number;
  /** Chart Height */
  height?: number;
  /** Display custom tooltip label or not */
  noCustomTooltipLabel?: boolean
  /** The label on the X axis */
  xAxisLabel?: string
  /** The label on the Y axis */
  yAxisLabel?: string
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
  /** The datasets to render the Chart */
  datasets: Chart.ChartDataSets[]

  width?: number;

  height?: number;
}

export class TimeBasedLineChart extends React.PureComponent<TimeBasedLineChartProps> {
  public static defaultProps: Partial<TimeBasedLineChartProps> = {
    showXGridLines: true,
    showYGridLines: true,
    showYTicks: true,
    showXTicks: true,
    minYTick: 0
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
          backgroundColor: dataset['backgroundColor'],
          fill: true,
          fillColor: dataset['lineColor']
        })
      }

      return attributes
    })
  }
  render () {
    const { labels, ...props } = this.props
    return (<BaseLineChart
      datasets={this.datasets}
      options={getTimeBasedLineChartDefaultOptions(this.props)}
      labels={labels}
      {...props}
    />)
  }
}

class BaseLineChart extends React.PureComponent<BaseLineChartProps> {
  render () {
    const {
      labels,
      options,
      datasets,
      width,
      height
    } = this.props

    return (
      <Line
        data={{
          labels: labels,
          datasets: datasets
        }}
        options={options}
        width={width}
        height={height}
      />
    )
  }
}
