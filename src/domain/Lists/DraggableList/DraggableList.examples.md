#### Draggable List

DraggableList can work as both a standalone component or within a ReduxForm

`onChange` returns the source and destination indexes for you to handle setting the state once the drag ends.

When using ReduxForm's FieldArray, simply pass the `fields.move` to the `onChange` and it will handle the state management for you.

_setItems_ is deprecated and should no longer be used.

```jsx
initialState = {
    items: [
    'lisa',
    'needs',
    'braces',
    'dental plan!',
  ]
};

  <DraggableList
    droppableId='b4bb0ac5-0474-4760-8bbb-6bf92d60b2ba'
    onChange={(sourceIndex, destinationIndex) => {
      setState((prevState) => {
        // You can use something like npm array-move instead of the following code
        const clonedItems = Array.from(prevState.items)
        const element = clonedItems[sourceIndex]
        clonedItems.splice(sourceIndex, 1)
        clonedItems.splice(destinationIndex, 0, element)
        return { items: clonedItems }
      })
    }}
  >
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
      onChange={(sourceIndex, destinationIndex) => {
        setState((prevState) => {
          // You can use something like npm array-move instead of the following code
          const clonedItems = Array.from(prevState.items)
          const element = clonedItems[sourceIndex]
          clonedItems.splice(sourceIndex, 1)
          clonedItems.splice(destinationIndex, 0, element)
          return { items: clonedItems }
        })
      }}
    >
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

#### Draggable List with RadioSet
```jsx
import { RadioSet } from '@Domain/Inputs';
initialState = {
    items: [
        { 
            id: 'first-item',
            value: 'option 1'
        },
        { 
            id: 'second-item',
            value: 'option 2'
        },
        { 
            id: 'third-item',
            value: 'option 3'
        },
        { 
            id: 'fourth-item',
            value: 'option 4'
        }
    ]
};

  <DraggableList
    droppableId='b4bb0ac5-0474-4760-8bbb-6bf92d60b2ba'
    onChange={(sourceIndex, destinationIndex) => {
      setState((prevState) => {
        // You can use something like npm array-move instead of the following code
        const clonedItems = Array.from(prevState.items)
        const element = clonedItems[sourceIndex]
        clonedItems.splice(sourceIndex, 1)
        clonedItems.splice(destinationIndex, 0, element)
        return { items: clonedItems }
      })
    }}
  >
    {state.items.map((item, index) => (
        <RadioSet
            key={item.id}
            name={index}
            value={item.value}
            options={[
                {
                  label:'this is option 1',
                  value:'option 1',
                },
                {
                  label:'this is option 2 (I am disabled)',
                  value:'option 2'
                },
                {
                  label:'this is option 3',
                  value:'option 3',
                },
                {
                  label:'this is option 4',
                  value:'option 4'
                }
              ]}
        />
    ))}
  </DraggableList>
```
