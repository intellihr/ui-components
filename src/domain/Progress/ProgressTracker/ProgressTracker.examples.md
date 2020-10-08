The **Progress Tracker** is a visual representation of a users progress through a set of steps.
They guide the user through a number of steps in order to complete a specified process.

<br />

Progress Tracker `onClick` action is only available for past steps

```jsx
initialState = { value: 1 };

<ProgressTracker currentIndex={state.value}>
    <ProgressTracker.Step label='Report Issue' onClick={() => setState({value:0})}/>
    <ProgressTracker.Step label='Initiate Plan' onClick={() => setState({value:1})}/>
    <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={() => setState({value:2})}/>
</ProgressTracker>
```

In mobile style, progress Tracker only displays the current step with step number and no onclick action is available

```jsx
initialState = { value: 1 };

<ProgressTracker currentIndex={state.value} isMobile>
    <ProgressTracker.Step label='Report Issue' onClick={() => setState({value:0})}/>
    <ProgressTracker.Step label='Initiate Plan' onClick={() => setState({value:1})}/>
    <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={() => setState({value:2})}/>
</ProgressTracker>
```

### Best Practices
* Progress Tracker should only be used for tasks requiring 2 to 6 steps.
* If a task needs more than 6 steps, consider simplifying the process or breaking it up into multiple tasks.
* Use labels that clearly indicate the purpose of the step.
* Keep labels to a single line of text, be short and concise (1-2 words).
* ProgressTracker will handle its own width based on the number of steps involved. Always ensure that the ProgressTracker is not in any surrounding boxes so that it will always take up 100% of the page content width

```jsx
initialState = { value: 1 };

<ProgressTracker currentIndex={state.value}>
    <ProgressTracker.Step label='Report Issue' onClick={() => setState({value:0})}/>
    <ProgressTracker.Step label='Initiate Plan' onClick={() => setState({value:1})}/>
</ProgressTracker>
```

![progress tracker](./image/ProgressTracker.png)
