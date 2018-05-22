import { ChartData } from 'react-chartjs-2'
import { get, toNumber } from 'lodash'
import { ChartTooltipItem, TimeBasedLineChartProps } from './TimeBasedLineChart'

export const getTimeBasedLineChartDefaultOptions = (props: TimeBasedLineChartProps) => {
  const {
    showXGridLines,
    showYGridLines,
    showXTicks,
    showYTicks,
    minYTick,
    maxYTick,
    yTickStepSize,
    yTickLabels,
    timeToolTipFormat,
    timeUnit,
    timeDisplayFormat,
    dateFormat,
    noCustomTooltipLabel
  } = props

  return {
    maintainAspectRatio: false,
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
        fontSize: '8px',
        gridLines: {
          drawBorder: showYTicks,
          display: showYGridLines
        },
        ticks: {
          display: showYTicks,
          suggestedMin: minYTick,
          suggestedMax: maxYTick,
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
          const { noCustomTooltipLabel } = props

          if (noCustomTooltipLabel) return ''

          if (!tooltipItem || tooltipItem.datasetIndex === null) {
            return ''
          }

          const label = get(data, ['datasets', `${tooltipItem.datasetIndex}`, 'label'], '')

          let valueLabel = tooltipItem.yLabel

          if (yTickLabels) {
            Object.keys(yTickLabels).forEach(function (key) {
              if (toNumber(key) === toNumber(get(tooltipItem, ['yLabel'], ''))) {
                valueLabel = yTickLabels[key]
              }
            })
          }

          return `${label}: ${valueLabel}`
        }
      }
    }
  }
}
