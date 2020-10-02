The **Progress Tracker** is a visual representation of a users progress through a set of steps.
They guide the user through a number of steps in order to complete a specified process.

```jsx
initialState = { value: 1 };

<ProgressTracker currentIndex={state.value}>
    <ProgressTracker.Step label='Report Issue' onClick={() => setState({value:0})}/>
    <ProgressTracker.Step label='Initiate Plan' onClick={() => setState({value:1})}/>
    <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={() => setState({value:2})}/>
</ProgressTracker>
```

```jsx
initialState = { value: 1 };

<ProgressTracker currentIndex={state.value} isMobile>
    <ProgressTracker.Step label='Report Issue' onClick={() => setState({value:0})}/>
    <ProgressTracker.Step label='Initiate Plan' onClick={() => setState({value:1})}/>
    <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={() => setState({value:2})}/>
</ProgressTracker>
```
### Steps
Progress Tracker require at least two steps, with no more than six.

<br />

### Best Practices
* If a task needs more than 6 steps, consider simplifying the process or breaking it up into multiple tasks.
Use labels that clearly indicate the purpose of the step.
* Keep labels to a single line of text, be short and concise (1-2 words).

<br />

### Design Pattern
* When progress tracker have less steps (~2 steps), the progress tracker should place 50% content to avoid the steps stay far away. 

![progress tracker](./image/ProgressTracker.png)
