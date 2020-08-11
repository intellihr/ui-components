**Modals** display additional content over the main view a page.
Their content can be changed to suit many different cases for forms and features.

The modern modal design requires the use of the `useSubcomponents` prop
and proper usage of the subcomponents: `Header`, `Content`, and `Footer`

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { VerticalForm } from '@Domain/Forms';
import { TextInput, RadioSet } from '@Domain/Inputs';

initialState = { textInputValue: '', radioInputValue: 'today', isOpen: false };

<>
    <Button
      onClick={() => setState({isOpen: true})}
    >
      Click Me
    </Button>
    <Modal
      isOpen={state.isOpen}
      handleClose={() => setState({isOpen: false})}
      useSubcomponents={true}
    >
      <Modal.Header>
        Example Modal
      </Modal.Header>
      <Modal.Content>
        <VerticalForm
          onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
        >
          <VerticalForm.Field
            inputName='testTextInput'
            label='What is your name'
          >
            <TextInput
              name='testInput'
              onChange={(value) => setState({ textInputValue: value })}
            />
          </VerticalForm.Field>
          <VerticalForm.Field
            inputName='testRadioInput'
            label='Choose a day'
            margins={{ bottom: 0 }}
          >
            <RadioSet
                name='example-radio-set-horizontal'
                value={state.radioInputValue}
                orientation={Props.Orientation.Horizontal}
                onChange={(value) => setState({radioInputValue: value})}
                options={[
                    {
                      label:'Today',
                      value:'today'
                    },
                    {
                      label:'Tomorrow',
                      value:'tomorrow'
                    },
                    {
                      label:'Never',
                      value:'never'
                    }
                  ]}
              />
          </VerticalForm.Field>
        </VerticalForm>
      </Modal.Content>
      <Modal.Footer
        leftControls={
          <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
        }
        rightControls={
          <ButtonGroup>
            <Button type='cancel' onClick={() => setState({isOpen: false})}>Cancel</Button>
            <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
          </ButtonGroup>
        }
      />
    </Modal>
</>
```

### Best Practices
* Only use a modal when displaying content that does not merit a full page
* Include clear call-to-actions for the user to proceed, cancel, or close

<br />

### Related Components
* For a simple binary choice that require user interruption, use a [Dialog](/#/Overlay/Dialog).

<br />

### Props Examples

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { VerticalForm } from '@Domain/Forms';
import { TextInput, RadioSet } from '@Domain/Inputs';

initialState = { textInputValue: '', radioInputValue: 'today', isLargeOpen: false, isXLargeOpen: false };

<>
  Extra sizing options for wide content:
  <br/>
  <i>Large</i>
  <br/>
  <Button
    onClick={() => setState({isLargeOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isLargeOpen}
    handleClose={() => setState({isLargeOpen: false})}
    useSubcomponents={true}
    size={Props.Size.Large}
  >
    <Modal.Header>
      Example Modal
    </Modal.Header>
    <Modal.Content>
      <VerticalForm
        onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
      >
        <h3>Large modals are sized to the standard desktop browser width (1024px)</h3>

        <VerticalForm.Field
          inputName='testTextInput'
          label='What is your name'
        >
          <TextInput
            name='testInput'
            onChange={(value) => setState({ textInputValue: value })}
          />
        </VerticalForm.Field>
        <VerticalForm.Field
          inputName='testRadioInput'
          label='Choose a day'
          margins={{ bottom: 0 }}
        >
          <RadioSet
              name='example-radio-set-horizontal'
              value={state.radioInputValue}
              orientation={Props.Orientation.Horizontal}
              onChange={(value) => setState({radioInputValue: value})}
              options={[
                {
                  label:'Today',
                  value:'today'
                },
                {
                  label:'Tomorrow',
                  value:'tomorrow'
                },
                {
                  label:'Never',
                  value:'never'
                }
              ]}
            />
        </VerticalForm.Field>
      </VerticalForm>
    </Modal.Content>
    <Modal.Footer
      leftControls={
        <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
      }
      rightControls={
        <ButtonGroup>
          <Button type='cancel' onClick={() => setState({isLargeOpen: false})}>Cancel</Button>
          <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
        </ButtonGroup>
      }
    />
  </Modal>
  <br/>
  <br/>
  <i>Extra Large</i>
  <br/>
  <Button
    onClick={() => setState({isXLargeOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isXLargeOpen}
    handleClose={() => setState({isXLargeOpen: false})}
    useSubcomponents={true}
    size={Props.Size.XLarge}
  >
    <Modal.Header>
      Example Modal
    </Modal.Header>
    <Modal.Content>
      <VerticalForm
        onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
      >
        <h3>Extra large modals are sized to the big desktop browser width (1440px)</h3>

        <VerticalForm.Field
          inputName='testTextInput'
          label='What is your name'
        >
          <TextInput
            name='testInput'
            onChange={(value) => setState({ textInputValue: value })}
          />
        </VerticalForm.Field>
        <VerticalForm.Field
          inputName='testRadioInput'
          label='Choose a day'
          margins={{ bottom: 0 }}
        >
          <RadioSet
            name='example-radio-set-horizontal'
            value={state.radioInputValue}
            orientation={Props.Orientation.Horizontal}
            onChange={(value) => setState({radioInputValue: value})}
            options={[
                {
                  label:'Today',
                  value:'today'
                },
                {
                  label:'Tomorrow',
                  value:'tomorrow'
                },
                {
                  label:'Never',
                  value:'never'
                }
              ]}
            />
        </VerticalForm.Field>
      </VerticalForm>
    </Modal.Content>
    <Modal.Footer
      leftControls={
        <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
      }
      rightControls={
        <ButtonGroup>
          <Button type='cancel' onClick={() => setState({isXLargeOpen: false})}>Cancel</Button>
          <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
        </ButtonGroup>
      }
    />
  </Modal>
  <br/>
  <br/>
  <i>Full Screen</i>
  <br/>
  <Button
    onClick={() => setState({isXLargeOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isXLargeOpen}
    handleClose={() => setState({isXLargeOpen: false})}
    useSubcomponents={true}
    size={Props.Size.FullScreen}
  >
    <Modal.Header>
      Example Modal
    </Modal.Header>
    <Modal.Content>
      <VerticalForm
        onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
      >
        <h3>Full-screen modals are sized to nearly the width and at least the height of the window</h3>

        <VerticalForm.Field
          inputName='testTextInput'
          label='What is your name'
        >
          <TextInput
            name='testInput'
            onChange={(value) => setState({ textInputValue: value })}
          />
        </VerticalForm.Field>
        <VerticalForm.Field
          inputName='testRadioInput'
          label='Choose a day'
          margins={{ bottom: 0 }}
        >
          <RadioSet
            name='example-radio-set-horizontal'
            value={state.radioInputValue}
            orientation={Props.Orientation.Horizontal}
            onChange={(value) => setState({radioInputValue: value})}
            options={[
                {
                  label:'Today',
                  value:'today'
                },
                {
                  label:'Tomorrow',
                  value:'tomorrow'
                },
                {
                  label:'Never',
                  value:'never'
                }
              ]}
            />
        </VerticalForm.Field>
      </VerticalForm>
    </Modal.Content>
    <Modal.Footer
      leftControls={
        <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
      }
      rightControls={
        <ButtonGroup>
          <Button type='cancel' onClick={() => setState({isXLargeOpen: false})}>Cancel</Button>
          <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
        </ButtonGroup>
      }
    />
  </Modal>
</>
```

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';

<>
  <i>shouldCloseOnEsc</i>, <i>shouldCloseOnOverlayClick</i>, and <i>showCloseButton</i>
  <br/>
  Let you make sure users won't accidentally close an important modal:
  <br/>
  <Button
    onClick={() => setState({isOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isOpen}
    handleClose={() => setState({isOpen: false})}
    useSubcomponents={true}
    shouldCloseOnEsc={false}
    shouldCloseOnOverlayClick={false}
    showCloseButton={false}
  >
    <Modal.Header>
      Example Modal
    </Modal.Header>
    <Modal.Content>
      You can ONLY close this by clicking 'Confirm'
    </Modal.Content>
    <Modal.Footer
      rightControls={
        <ButtonGroup>
          <Button type='primary' onClick={() => setState({isOpen: false})}>Confirm</Button>
        </ButtonGroup>
      }
    />
  </Modal>
</>
```

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';

<>
  Modal handles long content well:
  <br/>
  <Button
    onClick={() => setState({isOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isOpen}
    handleClose={() => setState({isOpen: false})}
    useSubcomponents={true}
  >
    <Modal.Header>
      Example Modal
    </Modal.Header>
    <Modal.Content>
      Modals will expand infinitely vertically to match their content, no matter how large it is
      <div style={{height: 2000, backgroundImage: 'linear-gradient(to bottom right, red, yellow)'}}>
        The following is a dummy space to fill out the modal
      </div>
    </Modal.Content>
    <Modal.Footer
      leftControls={
        <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
      }
      rightControls={
        <ButtonGroup>
          <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
        </ButtonGroup>
      }
    />
  </Modal>
</>
```

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';

<>
  Legacy Modal
  <br/>
  <Button
    onClick={() => setState({isOpen: true})}
  >
    Click Me
  </Button>
  <Modal
    isOpen={state.isOpen}
    handleClose={() => setState({isOpen: false})}
  >
    <h2>Example Modal</h2>

    This is the legacy modal style which should NOT be used moving forward.

    <br/>

    <ButtonGroup>
      <Button onClick={() => alert('Go to previous modal page')}>Back</Button>
      <Button type='primary' onClick={() => alert('Go to next modal page')}>Next</Button>
    </ButtonGroup>
  </Modal>
</>
```

#### Long pages
```jsx

<div style={{height: 2000}}>
  The following is a dummy space to fill out the page and ensure it doesn't scroll when a modal is open
</div>
```
