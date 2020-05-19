#### Draggable List

```jsx
initialState = {
    items: [
    'lisa',
    'needs',
    'braces',
    'dental plan!',
  ]
};

/*
  useState Hooks version - this is ideally what you would use, but we can't show this as an example in styleguidist

  const [items, setItems] = useState(['lisa', 'needs', 'braces', 'dental plan!'])

  <DraggableList setItems={setItems}>
    {state.items.map(item => (
        <div>
          {item}
        </div>
    ))}
  </DraggableList>
*/

  <DraggableList
    droppableId='b4bb0ac5-0474-4760-8bbb-6bf92d60b2ba'
    setItems={(itemsCallback) => {
      return setState((prevState) => {
        return { items: itemsCallback(prevState.items)}
      })
    }
  }>
    {state.items.map(item => (
        <div>
          {item}
        </div>
    ))}
  </DraggableList>
```

#### Draggable List with item addition and deletion

```jsx
  import { Variables } from '@Common';
  import { Button } from '@Domain/Buttons/Button';
  import { TextInput } from '@Domain/Inputs/TextInput';

  initialState = {
    items: [
      'lisa',
      'needs',
      'braces',
      'dental plan!',
    ],
    textValue: ''
  };

  <>
    <TextInput
      value={state.textValue}
      placeholder='Enter a new value here'
      onChange={(value) => {setState({textValue: value})}}
    />

    <Button
      type='primary'
      onClick={() => setState((prevState) => {
        const newItems = [...prevState.items, prevState.textValue]
        return { items: newItems}
      })}
      margins={{
        top: Variables.Spacing.sXSmall,
        bottom: Variables.Spacing.sMedium
      }}
    >
      Add an item!
    </Button>

    <DraggableList
      droppableId='b4bb0ac5-0474-4760-8bbb-6bf92d60b2ba'
      setItems={(itemsCallback) => {
        return setState((prevState) => {
          return { items: itemsCallback(prevState.items)}
        })
      }
    }>
      {state.items.map((item, index) => (
          <div>
            {item}

            <Button
              type='alert'
              onClick={() => setState((prevState) => {
                let newItems = [...prevState.items]
                newItems.splice(index, 1)
                return { items: newItems }
              })}
              margins={{
                left: Variables.Spacing.sSmall
              }}
            >
              Delete
            </Button>
          </div>
      ))}
    </DraggableList>
  </>
```

