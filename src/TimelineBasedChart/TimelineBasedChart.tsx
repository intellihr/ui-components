import React from 'react'
import { Line, ChartData } from 'react-chartjs-2'
import { reduce, merge, get } from 'lodash'
import classNames from 'classnames'
import moment from 'moment'
const timeLineChartClass = require('./style.scss')

export interface TimelineBasedChartProps {
  labels?: Array<string | string[]>;
  data?: any
  showXGridLines?: boolean
  showXTicks?: boolean
  showYTicks?: boolean
  minYTick?: number
  maxYTick: number
  yTickStepSize: number
  yTickLabels?: any
  timeToolTipFormat: string
  timeUnit: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
  timeDisplayFormat: string
  dateFormat: string
  getColour: (lineColor: string) => string
  title: string
}

export interface ChartTooltipItem {
  xLabel?: string;
  yLabel?: string;
  datasetIndex?: number;
  index?: number;
}

export class TimelineBasedChart extends React.PureComponent<TimelineBasedChartProps> {
  render() {
    return (<BaseTimelineBasedChart
      showXGridLines={false}
      showXTicks={true}
      showYTicks={true}
      minYTick={0} {...this.props} />)
  }
}


class BaseTimelineBasedChart extends React.PureComponent<TimelineBasedChartProps> {
  get options() {
    const {
      showXGridLines,
      showXTicks,
      showYTicks,
      minYTick,
      maxYTick,
      yTickStepSize,
      yTickLabels,
      timeToolTipFormat,
      timeUnit,
      timeDisplayFormat,
      dateFormat
    } = this.props

    return {
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            parser: dateFormat,
            tooltipFormat: timeToolTipFormat,
            unit: timeUnit,
            displayFormats: {
              [timeUnit]: timeDisplayFormat
            }
          },
          gridLines: {
            display: showXGridLines
          },
          ticks: {
            display: showXTicks
          }
        }],
        yAxes: [{
          gridLines: {
            drawBorder: showYTicks
          },
          ticks: {
            display: showYTicks,
            min: minYTick,
            max: maxYTick,
            stepSize: yTickStepSize,
            callback: (label: any) => {
              if (yTickLabels) {
                let tickLabel = null

                Object.keys(yTickLabels).forEach(function (key) {
                  if (parseInt(key) === parseInt(label)) {
                    tickLabel = yTickLabels[key]
                  }
                })

                return tickLabel
              }

              return label
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem: ChartTooltipItem, data: ChartData<any>) => {

            if (!data.datasets || !tooltipItem.datasetIndex) {
              return ''
            }

            let label = data.datasets[tooltipItem.datasetIndex].label || ''

            if (label) {
              label += ': '
            }
            let valueLabel = tooltipItem.yLabel

            if (yTickLabels) {
              Object.keys(yTickLabels).forEach(function (key) {
                if (parseInt(key) === parseInt(get(tooltipItem, ['yLabel', '']))) {
                  valueLabel = yTickLabels[key]
                }
              })
            }

            return `${label}${valueLabel}`
          }
        }
      }
    }
  }

  lineGradient(lineColor: string) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const gradient = ctx!.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, lineColor.replace(')', ', 0.3)').replace('rgb', 'rgba'))
    gradient.addColorStop(0.9, lineColor.replace(')', ', 0)').replace('rgb', 'rgba'))
    return gradient
  }

  get datasets() {
    const {
      labels,
      data,
      getColour
    } = this.props

    return data.map((dataset: ChartData<any>) => {
      let attributes = {
        label: dataset['datasetLabel'],
        backgroundColor: getColour(dataset['lineColor']),
        borderColor: getColour(dataset['lineColor']),
        borderWidth: 4,
        pointBackgroundColor: getColour(dataset['lineColor']),
        pointBorderColor: getColour(dataset['lineColor']),
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverBackgroundColor: getColour(dataset['lineColor']),
        pointHitRadius: 10,
        pointHoverRadius: 5,
        lineTension: 0,
        fill: false,
        data: dataset['dataset']
      }

      if (dataset['isGradient']) {
        attributes = merge(attributes, {
          colour: getColour(dataset['lineColor']),
          backgroundColor: this.lineGradient(getColour(dataset['lineColor'])),
          fill: true,
          fillColor: getColour(dataset['lineColor'])
        })
      }

      return attributes
    })

  }

  render() {
    const { title, labels } = this.props
    return (
      <div className={classNames(timeLineChartClass, 'line-chart')}>
        {title && (<div className='chart-title'>
          {title}
        </div>)}

        <Line
          data={{
            labels: labels,
            datasets: this.datasets
          }}
          options={this.options}
        />
      </div>
    )
  }
}


const lineObject = {
  lineColor: 'rgb(67, 45, 243)',
  datasetLabel: 'Happiness Rating',
  isGradient: true,
  dataset: [
    {
      x: moment('2018-05-08T05:06:52.000Z'),
      y: '6'
    },
    {
      x: moment('2018-05-08T04:40:09.000Z'),
      y: '6'
    },
    {
      x: moment('2018-04-30T06:27:46.000Z'),
      y: '7'
    },
    {
      x: moment('2018-04-04T04:18:03.000Z'),
      y: '6'
    },
    {
      x: moment('2018-02-20T23:52:54.000Z'),
      y: '6'
    },
    {
      x: moment('2018-02-06T22:56:37.000Z'),
      y: '6'
    },
    {
      x: moment('2018-01-08T22:40:42.000Z'),
      y: '6'
    },
    {
      x: moment('2017-12-21T05:18:47.000Z'),
      y: '6'
    },
    {
      x: moment('2017-11-06T22:55:53.000Z'),
      y: '5'
    },
    {
      x: moment('2017-11-06T22:46:59.000Z'),
      y: '6'
    },
    {
      x: moment('2017-11-01T22:29:39.000Z'),
      y: '8'
    },
    {
      x: moment('2017-10-29T23:25:25.000Z'),
      y: '5'
    },
    {
      x: moment('2017-10-03T06:39:48.000Z'),
      y: '8'
    },
    {
      x: moment('2017-07-31T23:42:42.000Z'),
      y: '8'
    },
    {
      x: moment('2017-07-16T23:35:50.000Z'),
      y: '8'
    },
    {
      x: moment('2017-06-19T05:13:43.000Z'),
      y: '6'
    },
    {
      x: moment('2017-05-22T09:40:52.000Z'),
      y: '7'
    },
    {
      x: moment('2017-05-04T00:00:00.000Z'),
      y: '7'
    },
    {
      x: moment('2017-05-04T00:00:00.000Z'),
      y: '8'
    },
    {
      x: moment('2017-04-06T00:00:00.000Z'),
      y: '8'
    },
    {
      x: moment('2017-03-04T00:00:00.000Z'),
      y: '9'
    },
    {
      x: moment('2017-02-01T02:40:16.000Z'),
      y: '9'
    },
    {
      x: moment('2016-11-02T00:00:00.000Z'),
      y: '8'
    },
    {
      x: moment('2016-10-09T08:57:51.000Z'),
      y: '8'
    },
    {
      x: moment('2016-10-09T08:44:22.000Z'),
      y: '7'
    },
    {
      x: moment('2016-10-08T21:39:19.000Z'),
      y: '7'
    },
    {
      x: moment('2016-10-07T22:57:39.000Z'),
      y: '8'
    },
    {
      x: moment('2016-09-10T23:32:39.000Z'),
      y: '9'
    },
    {
      x: moment('2016-08-10T23:27:11.000Z'),
      y: '10'
    },
    {
      x: moment('2016-08-01T06:54:48.000Z'),
      y: '9'
    },
    {
      x: moment('2016-07-29T01:22:16.000Z'),
      y: '9'
    },
    {
      x: moment('2016-07-10T23:28:31.000Z'),
      y: '5'
    }]
}

export const TimeLineBasedExampleChart = () =>
  <TimelineBasedChart
    data={[lineObject]}
    maxYTick={10}
    yTickStepSize={1}
    timeToolTipFormat='ll'
    timeUnit='month'
    timeDisplayFormat='MMM'
    dateFormat='DD/MM/YYYY'
    title='productivity'
    getColour={() => 'rgb(15, 104, 250)'}
  />
