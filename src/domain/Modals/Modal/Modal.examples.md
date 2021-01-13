**Modals** can be used for a variety of things - most commonly Content (like Goals and Notes) or Forms.
Ultimately the Modal component is configurable to however you need to use it, but these main archetypes should provide enough guidance around what props and styling are recommended for each. 

Remember: Confirmation actions are no longer suitable for Modals and you should use the specifically designed [Dialog](/#/Overlay/Dialog) component instead.

Modals consist of 2-3 subcomponents. The `Header`, `Content`, and `Footer`. Each section has additional props to further configure the Modal. Due to the existence of legacy designs you'll also need to pass through the `useSubcomponents` prop whenever working with a Modal.

<br/>

### Form Modal
**Form Modals** should use all three subcomponents: `Header`, `Content`, and `Footer`
#### Form Modal Header 
- This should only display the form title
#### Form Modal Content
- This should display all of your form inputs and progress tracker (for wizard forms)
#### Form Modal Footer
- This should display the 'Submit' and 'Cancel' buttons, always aligned to the right. If using a wizard form, place the 'Back' button on the left.
See the below example for a better look at a Form Modal:
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

<br/>

### Content Modal
**Content Modals** should only use the `Header` and `Content` subcomponents.
#### Content Modal Header
 - `dropdownSections` allows you to add object-level actions like 'Edit', 'Delete' and provides a simple interface for both desktop and mobile. 
 -  `rightContent` allows you to add additional components to the right side of the Header. This is useful for displaying tip messages like 'Data has been automatically saved'. It is NOT available on mobile due to size restrictions and should not be used to display any essential information
#### Content Modal Content
 -  `rightColumn` adds an additional column to the right for displaying extra information on desktop sized screens. It is NOT available on mobile due to size restrictions - for mobile views, move this information somewhere else.
See the below example for a better look at a Content Modal:
```jsx
import { Props, Variables } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { VerticalForm } from '@Domain/Forms';
import { Text } from '@Domain/Typographies';
import { AvatarEntity, AvatarGroup } from '@Domain/Avatars';
import { TextInput } from '@Domain/Inputs';
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { textInputValue: '', isOpen: false };

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
      size={Props.Size.Large}
    >
      <Modal.Header
       rightComponent={<ButtonGroup>
                          <Button onClick={() => alert('Action 1')}>Action</Button>
                          <Button onClick={() => alert('Action 2')}>Action</Button>
                        </ButtonGroup>}
       dropdownSections= {[
             {
               text: 'Edit',
               href: 'https://www.google.com.au',
               stopPropagation: true
             },
             {
               text: 'Delete',
               onClick: (event) => { alert('Delete action for the item') },
               sectionType: 'alert',
               stopPropagation: true
             }
           ]}
      >
        Example Modal
      </Modal.Header>
      <Modal.Content
        rightColumn={<div style={{ width: '240px' }}>
                       <Text
                          isInline={false}
                          type={Props.TypographyType.Small}
                          margins={{ bottom: 4}}
                       >
                         Created By
                       </Text>
                       <AvatarEntity
                         initials='JW'
                         primaryText='John Wick'
                         margins={{ bottom: 16}}
                       />
                       <Text
                         isInline={false}
                         type={Props.TypographyType.Small}
                         margins={{ bottom: 4}}
                       >
                         Related to
                       </Text>
                       <TextInput
                         name='testInput'
                         icon={<FontAwesomeIcon type='solid' icon='search' />}
                         onChange={(value) => setState({ textInputValue: value })}
                       />
                       <Text
                         isInline={false}
                         type={Props.TypographyType.Small}
                         margins={{ bottom: 4, top: 16}}
                       >
                         Share with 
                        </Text>
                       <AvatarGroup
                         avatars={new Array(10).fill().map(() => ({
                         initials: 'JW',
                         imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
                         }))}
                       />
                     </div>}
      >
        <Text
           isInline={false}
           type={Props.TypographyType.Display}
           margins={{ bottom: 26}}
        >
          Team Kiki Note Summary
        </Text>
        <Text type={Props.TypographyType.Heading} weight={Variables.FontWeight.fwNormal}>
          Hi team, I found out an issue in the team workplace area. 
          There is lots of empty boxes on the pathway. I concern about the work safety.
        </Text>
      </Modal.Content>
    </Modal>
</>
```

<br/>

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
