import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Radar, defaults as chartJSDefaults } from 'react-chartjs-2'
import { forEach, merge, get } from 'lodash'
import Color from 'color'
import { Parser as HtmlToReactParser } from 'html-to-react'
import classNames from 'classnames'
import { Legend } from '../../Legends'

const style = require('./style.scss')

const { n600 } = require('../../../common/sass/variables.scss')

interface IDataset {
  colour: string
  label: string
}

interface IData {
  datasets: IDataset[]
}

interface ITooltipItems {
  datasetIndex: number
  yLabel: string
}

export interface IRadarChartDataLabels {
  [key: number]: string
}

export interface IRadarChartDatasets {
  label: string
  data: number[]
  colour?: string
}

export interface IRadarChartProps {
  /** Strings to display instead of the default numerical labels on each tick */
  dataLabels?: IRadarChartDataLabels
  /** Array of labels that are placed clockwise around the edge of the chart.  */
  pointLabels: string[]
  /** Set of data to display. Requires a name (label) and array of numbers. RGB colour is optional. */
  datasets: IRadarChartDatasets[]
  /** Display legend */
  showLegend?: boolean
  /** RGB colour of dataLabels */
  dataLabelColour?: string
  /** Minimum tick value to display */
  minValue: number
  /** Maximum tick value to display */
  maxValue?: number
  /** Size of each step between ticks */
  stepSize: number
  /** Height of the chart in pixels */
  height?: number
  /** Display tooltips on hover */
  showTooltips?: boolean
  /** Will display the first value as the first tick instead of in the center of the chart */
  minValueAsFirstTick?: boolean
}

merge(chartJSDefaults, {
  global: {
    legend: {
      display: false
    }
  }
})

const htmlToReactParser = new HtmlToReactParser()

export class RadarChart extends React.Component<IRadarChartProps> {

  get options (): object {
    const {
      dataLabels,
      dataLabelColour,
      minValue,
      maxValue,
      stepSize,
      showTooltips,
      minValueAsFirstTick
    } = this.props

    return {
      legendCallback: (chart: any) => this.legendCallback(chart),
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: showTooltips,
        titleFontSize: 10,
        callbacks: {
          label: (tooltipItems: ITooltipItems, data: IData) => this.tooltipLabelCallback(tooltipItems, data)
        }
      },
      scale: {
        pointLabels: {
          fontSize: 14
        },
        gridLines: {
          circular: true,
          offsetGridLines: true
        },
        ticks: {
          min: minValueAsFirstTick ? minValue - stepSize : minValue,
          max: maxValue,
          stepSize,
          fontSize: 10,
          fontColor: dataLabelColour,
          callback: (label: string) => get(dataLabels, label, label)
        }
      },
      layout: {
        padding: {
          bottom: 16
        }
      }
    }
  }

  get data (): object {
    const {
      datasets,
      pointLabels
    } = this.props

    forEach(datasets, (dataset) => {
      const dataColour = dataset.colour

      return merge(dataset, {
        borderColor: dataColour,
        backgroundColor: Color(dataColour).alpha(0.25),
        pointBorderColor: dataColour,
        pointBackgroundColor: dataColour,
        pointHoverBackgroundColor: dataColour,
        pointHitRadius: 10,
        pointHoverRadius: 5
      })
    })

    return {
      labels: pointLabels,
      datasets
    }
  }

  public static defaultProps: IRadarChartProps = {
    pointLabels: [],
    datasets: [],
    dataLabelColour: n600,
    showLegend: true,
    minValue: 0,
    maxValue: 5,
    stepSize: 1,
    height: 400,
    showTooltips: true,
    minValueAsFirstTick: false
  }
  public chart: any

  public componentDidMount () {
    this.forceUpdate()
  }

  public render (): JSX.Element {
    const {
      height
    } = this.props

    return (
      <div className={classNames(style.radarChartClass, 'radar-chart')}>
        {this.chart && htmlToReactParser.parse(this.chart.chartInstance.generateLegend())}

        <div>
          <Radar
            data={this.data}
            options={this.options}
            ref={(chart) => { this.chart = chart }}
            height={height}
          />
        </div>
      </div>
    )
  }

  private legendCallback (chart: any): string | null {
    const {
      showLegend
    } = this.props

    const {
      datasets
    } = chart.data

    if (showLegend) {
      return ReactDOMServer.renderToStaticMarkup(
        <Legend datasets={datasets} />
      )
    }

    return null
  }

  private tooltipLabelCallback (tooltipItems: ITooltipItems, data: IData) {
    const {
      dataLabels
    } = this.props

    const datasetName = data.datasets[tooltipItems.datasetIndex].label
    const dataPointValue = get(dataLabels, tooltipItems.yLabel, tooltipItems.yLabel)

    return `${datasetName}: ${dataPointValue}`
  }
}
