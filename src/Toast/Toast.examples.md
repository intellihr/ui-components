# Toast

## Basic Toast

```jsx
  <Toast>
    Hello this is a test toast!
  </Toast>
```

## Alert Toast

```jsx
  <Toast
    type='alert'
  >
    This is an alert toast. You need to do something NOW!
  </Toast>
```

## Toast with handleClose function

```jsx
initialState = { showToast: true };

<div>
  {state.showToast ? 
      <Toast
        handleClose={() => setState({ showToast: false })}
      >
        Click my close button!
      </Toast>
  : <Button onClick={() => setState({ showToast: true })}>Show Toast</Button>
  }
</div>
```

## Toast with onMount function

```jsx
initialState = { showToast: false };

<div>
  {state.showToast ? 
      <Toast
        onMount={() => {
          alert(`This is the onMount function. You can use this to set a timer and close the toast when it's finished :). This toast will automatically close in 3 seconds.`)
          setTimeout(() => setState({ showToast: false }), 3000)
        }}
      >
        This message will self destruct in 3 seconds.
      </Toast>
  : <Button onClick={() => setState({ showToast: !state.showToast })}>{state.showToast ? 'Hide' : 'Show'} Toast</Button>
  }
</div>
```

## Custom Content

```jsx
  <Toast
    handleClose={() => alert('close button clicked')}
  >
    The toast will render all of its children so you can use any component.
    <div>
      <Button type='primary'>Here is a button!</Button>
    </div>
    <VerticalTimeline
      year='2007'
    >
      <VerticalTimelineEvent
        eventDate='Apr 16'
      >
        Hey, whats up. This is the timeline component. First you need a VerticalTimeline component and inside that all you need are VerticalTimelineEvent components.
      </VerticalTimelineEvent>
      <VerticalTimelineEvent
        eventDate='Apr 19'
      >
        Each timeline event will show up separately.
      </VerticalTimelineEvent>
      <VerticalTimelineEvent
        eventDate='Jun 2'
      >
        Like this!
      </VerticalTimelineEvent>
      <VerticalTimelineEvent
        eventDate='Jun 2'
        markerComponent={
          <Avatar
            initials='JW'
            size='small'
          />
        }
      >
        You can also override the default event marker with a component like Avatar
      </VerticalTimelineEvent>
      <VerticalTimelineEvent
        eventDate='Jun 2'
        markerComponent={
          <Avatar 
            size='small'
            imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
          />
        }
      >
        And display a picture!
      </VerticalTimelineEvent>
    </VerticalTimeline>
  </Toast>
```


