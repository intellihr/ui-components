#### Date Range Input
```jsx
initialState = { startDate: null , endDate: null };

<DateRangeInput
  name='test-date-picker1'
  startDate={state.startDate}
  endDate={state.endDate}
  startDatePlaceholder='Start Date'
  endDatePlaceholder='End Date'
  handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate })}
/>
```

#### Date Range Input with date format
```jsx
initialState = { startDate: null , endDate: null };

<DateRangeInput
  name='test-date-picker2'
  startDate={state.startDate}
  endDate={state.endDate}
  startDatePlaceholder='Start Date'
  endDatePlaceholder='End Date'
  dateFormat='DD MMM YYYY'
  handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate })}
/>
```

#### Date Range Input with disable date choice
```jsx
import moment from 'moment'

initialState = { startDate: null , endDate: null };

<>
  Disable current month
  <DateRangeInput
    name='test-date-picker3'
    startDate={state.startDate}
    endDate={state.endDate}
    startDatePlaceholder='Start Date'
    endDatePlaceholder='End Date'
    handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate })}
    disabledDateRange={day => day.isAfter(moment().startOf('month')) && day.isBefore(moment().endOf('month'))}
  />
</>
```

##### isDisabled

```jsx
import moment from 'moment';

initialState = { startDate: moment() , endDate: moment() };

<DateRangeInput
  isDisabled
  name='test-date-picker4'
  startDate={state.startDate}
  endDate={state.endDate}
  startDatePlaceholder='Start Date'
  endDatePlaceholder='End Date'
  handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate })}
/>
```

##### isInvalid

```jsx
import moment from 'moment';

initialState = { startDate: moment() , endDate: moment() };

<DateRangeInput
  isInvalid
  name='test-date-picker5'
  startDate={state.startDate}
  endDate={state.endDate}
  startDatePlaceholder='Start Date'
  endDatePlaceholder='End Date'
  handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate  })}
/>
```

##### isMobile

```jsx
initialState = { startDate: null , endDate: null };

<DateRangeInput
  isMobile
  name='test-date-picker6'
  startDate={state.startDate}
  endDate={state.endDate}
  startDatePlaceholder='Start Date'
  endDatePlaceholder='End Date'
  handleDatesChange={dates => setState({ startDate: dates.startDate, endDate: dates.endDate  })}
/>
```
