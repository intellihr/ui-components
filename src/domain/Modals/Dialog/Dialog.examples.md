**Dialogs** are modals that are intended to be use only for quick binary actions like:     
Yes or No / Delete or Cancel

They come in two variants: `positive` and `negative`.    
The variant should be chosen based on the sentiment of the primary action.

```jsx
import { Props } from '@Common';
import { Button, ButtonGroup } from '@Domain/Buttons';
import { DialogVariant } from '@Domain/Modals/Dialog/Dialog'

initialState = { isOpen: false };

<>
    <Button
      onClick={() => setState({isOpen: true})}
    >
      Approve
    </Button>
    <Dialog
      isOpen={state.isOpen}
      handleClose={() => setState({isOpen: false})}
      title='Approve Goal'
      onPrimaryActionClick={() => {
        alert('primary action clicked')
        setState({isOpen: false})
      }}
      primaryActionLabel='Approve'
      onSecondaryActionClick={() => setState({isOpen: false})}
      secondaryActionLabel='Cancel'
      variant={DialogVariant.Positive}
    >
      Are you sure you want to approve this goal?
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
      variant={DialogVariant.Negative}
    >
      Are you sure you want to delete this goal templates?
      Goals created using this template will not be deleted.
    </Dialog>
</>
```
