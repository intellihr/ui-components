import React from 'react'
import moment from 'moment'
import { TimelineBasedChart } from './'
import { lineObject2, lineObject3 } from './sampleData'

export const TimeLineBasedExampleChart = () =>
  <TimelineBasedChart
    data={[lineObject2, lineObject3]}
    maxYTick={300}
    yTickStepSize={20}
    timeToolTipFormat='ll'
    timeUnit='month'
    timeDisplayFormat='MMM'
    dateFormat='DD/MM/YYYY'
    getColour={(c) => c}
  />
