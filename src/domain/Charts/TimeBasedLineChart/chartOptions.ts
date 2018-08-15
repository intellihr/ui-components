import { ChartData } from 'react-chartjs-2'
import { get, toNumber } from 'lodash'
import { IChartTooltipItem, ITimeBasedLineChartProps } from './TimeBasedLineChart'

export const getTimeBasedLineChartDefaultOptions = (props: ITimeBasedLineChartProps) => {
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
    xTickLabelRotationDegree,
    xAxisLabel,
    yAxisLabel,
    minXTick,
    maxXTick
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
          },
          min: minXTick,
          max: maxXTick
        },
        scaleLabel: {
          display: Boolean(xAxisLabel),
          labelString: xAxisLabel
        },
        gridLines: {
          display: showXGridLines
        },
        ticks: {
          display: showXTicks,
          maxRotation: xTickLabelRotationDegree || 65,
          minRotation: xTickLabelRotationDegree || 65
        }
      }],
      yAxes: [{
        fontSize: '8px',
        scaleLabel: {
          display: Boolean(yAxisLabel),
          labelString: yAxisLabel
        },
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

              Object.keys(yTickLabels).forEach(key => {
                if (parseInt(key, 10) === parseInt(label, 10)) {
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
        label: (tooltipItem: IChartTooltipItem, data: ChartData<any>) => {
          const { noCustomTooltipLabel } = props

          if (noCustomTooltipLabel) { return '' }

          if (!tooltipItem || tooltipItem.datasetIndex === null) {
            return ''
          }

          const label = get(data, ['datasets', `${tooltipItem.datasetIndex}`, 'label'], '')

          let valueLabel = tooltipItem.yLabel

          if (yTickLabels) {
            Object.keys(yTickLabels).forEach(key => {
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
