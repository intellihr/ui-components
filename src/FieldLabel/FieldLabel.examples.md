# Field Label

## Basic Field Label

```jsx
  <div>
    <FieldLabel>
      Hello boys!
    </FieldLabel>
    <TextInput name='example-input1' />
  </div>
```

## Field Label with `htmlFor`

```jsx
  <div>
    <FieldLabel
      htmlFor='example-input2'
    >
      Hello ladies!
    </FieldLabel>
    <TextInput name='example-input2' />
  </div>
```

## Field Label with isInvalid

```jsx
  <div>
    <FieldLabel
      isInvalid
    >
      Gentlemen...
    </FieldLabel>
    <TextInput name='example-input3' isInvalid />
  </div>
```
