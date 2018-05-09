import React from 'react'
import moment from 'moment'
import { TimelineBasedChart } from './'
import { lineObject } from './sampleData'

export const TimeLineBasedExampleChart = () =>
  <TimelineBasedChart
    data={[lineObject]}
    maxYTick={10}
    yTickStepSize={1}
    timeToolTipFormat='ll'
    timeUnit='month'
    timeDisplayFormat='MMM'
    dateFormat='DD/MM/YYYY'
    getColour={() => 'rgb(15, 104, 250)'}
  />
