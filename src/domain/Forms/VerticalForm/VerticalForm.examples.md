### Form Control Wrappers

```jsx
import { ButtonGroup, Button } from '@Domain/Buttons';

  <VerticalForm>
      <VerticalForm.LeftAlignControls>
        <ButtonGroup>
          <Button
            type='primary'
          >
            Left aligned controls
          </Button>
          <Button
            type='neutral'
          >
            Cancel
          </Button>
        </ButtonGroup>
      </VerticalForm.LeftAlignControls>
    <VerticalForm.RightAlignControls>
      <ButtonGroup>
        <Button
          type='neutral'
        >
          Cancel
        </Button>
        <Button
          type='primary'
        >
          Right aligned controls
        </Button>
      </ButtonGroup>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```


### Form Field


Basic field

```jsx
import { ButtonGroup, Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <ButtonGroup>
        <Button
          type='neutral'
        >
          Cancel
        </Button>
        <Button
          type='primary'
        >
          Submit me :)
        </Button>
      </ButtonGroup>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with description

```jsx
import { ButtonGroup, Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      description='This is a test description'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with action message

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';
import { TextLink } from '@Domain/Links';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      actionMessage={
            <TextLink
              onClick={(e)=> {
                e.preventDefault();
                alert('I am the action message')
              }}
              textType='small'
            >
              Click Here!
            </TextLink>
            }
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with tooltip

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      tooltipMessage='I am a test tooltip'
      tooltipProps={{width: 100}}
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with hint

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      hintOptions={{
        hint: <div> This is a test hint in the hint popover style </div>,
        label: 'This is a test hint label',
        hintWrapperProps: { width: 200 }
      }}
      label='This is a test input'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >	
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with errors & required

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      isRequired
      label='This is a test input'
      errorMessages={[
        'You can pass in an array of error messages. (Or just a single string)',
        'Each error will be on a separate line :)'
      ]}
    >
      <TextInput
        isInvalid={true}
        isRequired={true}
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field without bottom margin

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      margins={{ bottom: 0 }}
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >	
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field without label

```jsx
import { Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
          <Button
             type='primary'
          >	
            Submit me :)
          </Button>
        </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Form with Sections

```jsx
import { ButtonGroup, Button } from '@Domain/Buttons';
import { TextInput } from '@Domain/Inputs';
import { Text } from '@Domain/Typographies';

initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Section name='My Section'>
        <VerticalForm.Field
          inputName='testInput'
          label='This is a test input'
          isRequired
        >
          <TextInput
            name='testInput'
            handleChange={(e) => setState({ textInputValue: e.target.value })}
          />
        </VerticalForm.Field>
        <VerticalForm.Field
          inputName='testInput'
          label='This is a test input'
          isRequired
        >
          <TextInput
            name='testInput'
            handleChange={(e) => setState({ textInputValue: e.target.value })}
          />
        </VerticalForm.Field>
    </VerticalForm.Section>

    <VerticalForm.Section 
      name='Other Section'
      rightComponent={<Text.Link>Select All</Text.Link>}
    >
        <VerticalForm.Field
          inputName='testInput'
          label='This is a test input'
          isRequired
        >
          <TextInput
            name='testInput'
            handleChange={(e) => setState({ textInputValue: e.target.value })}
          />
        </VerticalForm.Field>
        <VerticalForm.Field
          inputName='testInput'
          label='This is a test input'
          isRequired
        >
          <TextInput
            name='testInput'
            handleChange={(e) => setState({ textInputValue: e.target.value })}
          />
        </VerticalForm.Field>
    </VerticalForm.Section>
    
    <VerticalForm.RightAlignControls>
      <ButtonGroup>
        <Button
          type='neutral'
        >
          Cancel
        </Button>
        <Button
          type='primary'
        >
          Submit me :)
        </Button>
      </ButtonGroup>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

