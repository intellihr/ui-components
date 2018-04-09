import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Radar, defaults as chartJSDefaults } from 'react-chartjs-2'
import { forEach, merge, get } from 'lodash'
import Color from 'color'
import { Parser as HtmlToReactParser } from 'html-to-react'
import classNames from 'classnames'
import { Icon } from '../Icon'

const style = require('./style.scss')

interface Dataset {
  colour: string
  label: string
}

interface Data {
  datasets: Dataset[]
}

interface TooltipItems {
  datasetIndex: number
  yLabel: string
}

export interface RadarChartDataLabels {
  [key: number]: string
}

export interface RadarChartDatasets {
  label: string
  data: number[]
  colour?: string
}

export interface RadarChartProps {
  dataLabels?: RadarChartDataLabels
  pointLabels: string[]
  datasets: RadarChartDatasets[]
  colour?: string
  showLegend?: boolean
  dataLabelColour?: string
  maxValue?: number
}

merge(chartJSDefaults, {
  global: {
    legend: {
      display: false
    }
  }
})

const htmlToReactParser = new HtmlToReactParser()

export class RadarChart extends React.Component<RadarChartProps> {
  public chart: any;

  public static defaultProps: RadarChartProps = {
    pointLabels: [],
    datasets: [],
    showLegend: true,
    maxValue: 5
  }

  componentDidMount () {
    this.forceUpdate()
  }

  get options (): object {
    const {
      dataLabels,
      showLegend,
      dataLabelColour
    } = this.props

    return {
      legendCallback: (chart: any) => {
        const {
          datasets
        } = chart.data

        if (showLegend && datasets.length) {
          return ReactDOMServer.renderToStaticMarkup(
            <ul>
              {datasets.map((dataset: Dataset, i: number) => {
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

        return null
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        titleFontSize: 10,
        callbacks: {
          label: (tooltipItems: TooltipItems, data: Data) => {
            const datasetName = data.datasets[tooltipItems.datasetIndex].label
            const dataPointValue = get(dataLabels, tooltipItems.yLabel, tooltipItems.yLabel)

            return `${datasetName}: ${dataPointValue}`
          }
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
          min: 0,
          max: 5,
          stepSize: 1,
          fontSize: 10,
          fontColor: dataLabelColour,
          callback: (label: string) => get(dataLabels, label, label)
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

  public render (): JSX.Element {
    return (
      <div className={classNames(style.radarChartClass, 'radar-chart')}>
        {this.chart && htmlToReactParser.parse(this.chart.chartInstance.generateLegend())}

        <Radar
          data={this.data}
          options={this.options}
          ref={(chart) => { this.chart = chart }}
        />
      </div>
    )
  }
}
