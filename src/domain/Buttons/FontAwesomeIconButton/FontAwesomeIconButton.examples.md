#### FontAwesome Icon Button

```jsx
initialState = { isIconChecked: false, isRedIconChecked: true};

<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => setState({ isIconChecked: !state.isIconChecked })}
    isSelected={state.isIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    icon='times'
    type='regular'
    onClick={() => setState({ isRedIconChecked: !state.isRedIconChecked })}
    isSelected={state.isRedIconChecked}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```

#### FontAwesome Icon Button with different size

```jsx
initialState = { isIconChecked: false, isLargeIconChecked: false, isRedIconChecked: false};

<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => setState({ isIconChecked: !state.isIconChecked })}
    isSelected={state.isIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    size='large'
    icon='file-download'
    type='solid'
    onClick={() => setState({ isLargeIconChecked: !state.isLargeIconChecked })}
    isSelected={state.isLargeIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    size='large'
    icon='times'
    type='regular'
    onClick={() => setState({ isRedIconChecked: !state.isRedIconChecked })}
    isSelected={state.isRedIconChecked}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```

#### Large FontAwesome Icon Button with status dot
Status dot only supports large fontawesome icon size. 
Recommend to use large icon size and medium button size to have readable icon and status dot for users. 

```jsx

<div>
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='paper-plane'
    type='solid'
    tooltipText='My Notes'
    statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Info}
  />
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='paper-plane'
    type='solid'
    tooltipText='My Notes'
    statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Warning}
  />
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='inbox'
    type='solid'
    tooltipText='My Tasks'
    statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Critical}
  />
</div>
```

#### FontAwesome Icon Button on system top menu

```jsx
import { Props } from '@Common';
import { Avatar } from '@Domain/Avatars';
import { Inline } from '@Domain/Layouts';

<Inline>
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='paper-plane'
    type='solid'
    tooltipText='My Notes'
    statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Info}
  />
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='inbox'
    type='solid'
    tooltipText='My Tasks'
    statusDotVariant={FontAwesomeIconButton.StatusDotVariants.Warning}
  />
  <FontAwesomeIconButton
    iconSize='large'
    size='medium'
    icon='plus'
    type='regular'
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Medium}
    statusDot='indigo'
  />
</Inline>
```
