import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Radar, defaults as chartJSDefaults } from 'react-chartjs-2'
import { forEach as _forEach, merge as _merge, get as _get } from 'lodash'
import Color from 'color'
import { Parser as HtmlToReactParser } from 'html-to-react'
import classNames from 'classnames'
const style = require('./style.scss')
// import { getColour } from '../../../../utils/ui/colourHelper'
// import Icon from '../icons/Icon'

export interface RadarChartProps {
  dataLabels?: object
  pointLabels?: string[]
  datasets?: any[]
  colour?: string
  showLegend: boolean
}

_merge(chartJSDefaults, {
  global: {
    legend: {
      display: false
    }
  }

})

const htmlToReactParser = new HtmlToReactParser()

export class RadarChart extends React.Component<RadarChartProps, any> {
  public chart: any;

  public static defaultProps: RadarChartProps = {
    showLegend: true
  }

  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.forceUpdate()
  }

  get options () {
    const {
      dataLabels,
      showLegend
    } = this.props

    return {
      legendCallback: (chart: any) => {
        const {
          datasets
        } = chart.data

        if (showLegend && datasets.length) {
          return ReactDOMServer.renderToStaticMarkup(
            <ul>
              {datasets.map((dataset: any, i: number) => {
                return (
                  <li key={i}>
                    {/*<Icon*/}
                    {/*type='circle'*/}
                    {/*size={1}*/}
                    {/*style={{color: datasets[i].colour}}*/}
                    {/*/>*/}

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
          label: (tooltipItems: any, data: any) => {
            const datasetName = data.datasets[tooltipItems.datasetIndex].label
            const dataPointValue = _get(dataLabels, tooltipItems.yLabel, tooltipItems.yLabel)

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
          fontColor: 'rgb(0,255,0)',
          callback: (label: string) => _get(dataLabels, label, label)
        }
      }
    }
  }

  get data () {
    const {
      datasets,
      pointLabels
    } = this.props

    _forEach(datasets, (dataset) => {
      const dataColour = dataset.colour

      return _merge(dataset, {
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
          ref={(chart) => {this.chart = chart}}
        />
      </div>
    )
  }
}

/*
RadarChart.propTypes = {
    dataLabels: PropTypes.objectOf(PropTypes.string.isRequired),
    pointLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        colour: PropTypes.string
    }).isRequired),
    showLegend: PropTypes.bool
}
*/
