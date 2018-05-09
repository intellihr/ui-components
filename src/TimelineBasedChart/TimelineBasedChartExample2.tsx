import React from 'react'
import moment from 'moment'
import { TimelineBasedChart } from './'
const ds = [
  {
    datasetLabel: 'Productivity',
    lineColor: 'rgb(67, 45, 243)',
    dataset: [
      {
        x: moment('2018-05-08T04:40:09.000Z'),
        y: '100'
      },
      {
        x: moment('2018-02-06T22:56:37.000Z'),
        y: '150'
      },
      {
        x: moment('2017-11-06T22:46:59.000Z'),
        y: '150'
      },
      {
        x: moment('2017-07-31T23:42:42.000Z'),
        y: '150'
      },
      {
        x: moment('2017-05-04T00:00:00.000Z'),
        y: '100'
      },
      {
        x: moment('2017-02-01T02:40:16.000Z'),
        y: '200'
      },
      {
        x: moment('2016-11-02T00:00:00.000Z'),
        y: '150'
      },
      {
        x: moment('2016-10-07T22:57:39.000Z'),
        y: '150'
      },
      {
        x: moment('2016-08-10T23:27:11.000Z'),
        y: '100'
      }
    ]
  },
  {
    datasetLabel: 'Productivity',
    lineColor: 'rgb(3, 222, 235)',
    dataset: [
      {
        x: moment('2018-02-20T23:53:42.000Z'),
        y: '150'
      },
      {
        x: moment('2017-11-06T22:48:34.000Z'),
        y: '50'
      },
      {
        x: moment('2017-05-05T00:00:00.000Z'),
        y: '150'
      },
      {
        x: moment('2017-01-31T00:00:00.000Z'),
        y: '100'
      },
      {
        x: moment('2016-11-03T00:00:00.000Z'),
        y: '150'
      },
      {
        x: moment('2016-10-10T00:57:21.000Z'),
        y: '150'
      }
    ]
  }
]
const lineObjects = ds.map(d=>d)

export const TimeLineBasedExampleChart = () =>
  <TimelineBasedChart
    data={lineObjects}
    maxYTick={300}
    yTickStepSize={20}
    timeToolTipFormat='ll'
    timeUnit='month'
    timeDisplayFormat='MMM'
    dateFormat='DD/MM/YYYY'
    getColour={(c) => c}
  />
