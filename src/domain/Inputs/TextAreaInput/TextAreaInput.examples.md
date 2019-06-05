#### Text Area Input

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
  />
</div>
```

#### Text Area Input with GIFs

```jsx
import { DefaultsProvider } from '@Domain/Defaults';
initialState = { value: '', gifUrl: '' };

<div>
  <DefaultsProvider value={{
    tenorApiKey: 'NT1UWSP1UJ3G'
  }}>
    <TextAreaInput
      value={state.value}
      handleChange={(e) => setState({value: e.value})}
      gifUrl={state.gifUrl}
      handleGifChange={(url) => setState({gifUrl: url})}
    />
  </DefaultsProvider>
</div>
```

#### Invalid Text Area Input with GIFs

```jsx
import { DefaultsProvider } from '@Domain/Defaults';
initialState = { value: '', gifUrl: '' };

<div>
  <DefaultsProvider value={{
    tenorApiKey: 'NT1UWSP1UJ3G'
  }}>
    <TextAreaInput
      isInvalid
      value={state.value}
      handleChange={(e) => setState({value: e.value})}
      gifUrl={state.gifUrl}
      handleGifChange={(url) => setState({gifUrl: url})}
    />
  </DefaultsProvider>
</div>
```

#### Disabled text area

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
    isDisabled
    value="Text area is disabled so you can't change this text"
  />
</div>
```

#### Customize with props

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
    rows={8}
    placeholder="Hey I'm placeholder text. Hodor. John Wick."
  />
</div>
```
