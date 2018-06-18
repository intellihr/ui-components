# Input

## Basic Input

```jsx
  <div>
    Text
    <TextInput />
    Number
    <NumberInput />
    Checkbox
    <CheckboxInput 
      name='example-checkbox'
      label='This is a checkbox input :)'
    />
  </div>
```

## Input with Attributes

```jsx
  <div>
    Text
    <TextInput
     maxlength={3}
    />
    Number
    <NumberInput 
      min={0}
      max={5}
      step={0.5}
      placeholder={2.5}
    />
  </div>
```

## Input with Icon

```jsx
  <div>
    Text
    <TextInput 
      icon={<FontAwesomeIcon type='facebook' />}
    />
    Number
    <NumberInput 
      icon={<IntelliIcon type='search' />}
    />
  </div>
```

## Input with highlightOnFocus

```jsx
   <div>
     Text
     <TextInput 
       value='Blah blah I am text'
       highlightOnFocus
     />
     Number
     <NumberInput 
       value={3}
       highlightOnFocus
     />
   </div>
```

## Input with handleBlur

```jsx
   <div>
     Text
     <TextInput 
       value='Blur me!'
       handleBlur={(e, value) => alert(`
            event: ${e}
            value: ${value}
       `)}
     />
     Number
     <NumberInput 
       value={987654321}
       handleBlur={(e, value) => alert(`
           event: ${e}
           value: ${value}
       `)}
     />
   </div>
```

## Invalid Input

```jsx
  <TextInput 
    isInvalid
  />
```

## Disabled Input

```jsx
  <TextInput
    isDisabled
   />
```
