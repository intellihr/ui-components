
#### 24 Hours Time Input

```jsx

initialState = {
  value:'15:55'
};

<TimeInput
  value={state.value}
  handleChange={(value) => setState({value: value})}
/>
```

#### Am / Pm Time Input

```jsx

initialState = {
  value:'15:55'
};

<div>
  <TimeInput
    isTimeRange
    value={state.value}
    handleChange={(value) => setState({value: value})}
  />
  The return value is {state.value}
</div>

```
