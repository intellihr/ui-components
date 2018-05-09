import { ChartTooltipItem, TimeBasedLineChartProps } from './TimeBasedLineChart'
import { ChartData } from 'react-chartjs-2'
import { get } from 'lodash'

export const getChartOptions = (props: TimeBasedLineChartProps) => {
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
  } = props

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
