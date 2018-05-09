import React from 'react'
import moment from 'moment'
import { TimelineBasedChart } from './'

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
