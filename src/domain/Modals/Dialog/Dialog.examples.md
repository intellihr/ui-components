**Dialogs** are modals that are intended to be use only for quick binary actions.     

They come in two variants: `default` and `destructive`     
* `destructive` should only be used to confirm the deletion of a piece of data   
* In all other cases `default` will be suitable

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { DialogVariant } from '@Domain/Modals/Dialog/Dialog'

initialState = { isOpen: false };

<>
    <Button
      onClick={() => setState({isOpen: true})}
    >
      Leave Page
    </Button>
    <Dialog
      isOpen={state.isOpen}
      handleClose={() => setState({isOpen: false})}
      title='Unsaved Changes'
      onPrimaryActionClick={() => {
        alert('primary action clicked')
        setState({isOpen: false})
      }}
      primaryActionLabel='Leave'
      onSecondaryActionClick={() => setState({isOpen: false})}
      secondaryActionLabel='Cancel'
    >
      Are you sure you want to leave the page?
    </Dialog>
</>
```

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { DialogVariant } from '@Domain/Modals/Dialog/Dialog'

initialState = { isOpen: false };

<>
    <Button
      onClick={() => setState({isOpen: true})}
    >
      Delete
    </Button>
    <Dialog
      isOpen={state.isOpen}
      handleClose={() => setState({isOpen: false})}
      title='Delete Goal Template'
      onPrimaryActionClick={() => {
        alert('primary action clicked')
        setState({isOpen: false})
      }}
      primaryActionLabel='Delete'
      onSecondaryActionClick={() => setState({isOpen: false})}
      secondaryActionLabel='Cancel'
      variant={DialogVariant.Destructive}
    >
      Are you sure you want to delete this goal template?
      Goals created using this template will not be deleted.
    </Dialog>
</>
```

### Actions
Dialogs require at least one action, with no more than two.

* When only one action is provided, it is an acknowledgement action.
* When two actions are provided, the primary action is a confirming action, and the secondary a dismissing action.

<br />

### Best Practices
* For actions, avoid 'Yes' and 'No' responses.
* If an action involves cancelling an operation, it should be the secondary action, usually labeled 'Cancel'.
* A Dialog may appear above a Modal in certain cases (eg. confirming the deletion of the Modal data)
* A Dialog must never appear above another Dialog
* A Dialog action must never trigger another Dialog to open

<br />

### Related Components
* For more complex interactions that require user interruption, use a [Modal](/#/Overlay/Modal).
