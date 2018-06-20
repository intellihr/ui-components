# Input Label

## Basic Input Label

```jsx
  <div>
    <InputLabel>
      Hello boys!
    </InputLabel>
    <TextInput name='example-input1' />
  </div>
```

## Input Label with `htmlFor`

```jsx
  <div>
    <InputLabel
      htmlFor='example-input2'
    >
      Hello ladies!
    </InputLabel>
    <TextInput name='example-input2' />
  </div>
```

## Input Label with isInvalid

```jsx
  <div>
    <InputLabel
      isInvalid
    >
      Gentlemen...
    </InputLabel>
    <TextInput name='example-input3' isInvalid />
  </div>
```
