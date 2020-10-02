Settings pages or feature pages are considered as content page

Content page should use `Page` with `content` as `layoutType`

![page layout type](./image/Page.png)
![content page](./image/ContentPage.png)

### Breadcrumb Group
All pages should have **Breadcrumb Group** and it should have **back page title** when there is something to go back to
- All labels are in **Title Case**
- It should be the **Back Page Title/ Page title** for most case
- For archive list, it should be a extra page for archived list and its breadcrumb group is Goal Template Library / Archive

<br />

### Back Button
All pages should have `backButtonProps` on Page component for **Back Button** when there is something to go back to
- All labels are in **Title Case**
- It should be the **back page title** when it existed

<br />

### Page Title
Page title naming would be a domain decision. It may have more standard in future.

<br />

### Page Description
A description is **required for all settings/ feature front pages** to provide context for **how/why/where** these settings are used and any **limitations** of the feature.

<br />

### Page Action
Use `Inline` for page action and pass into `titleAction` on Page component for page action
```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { TooltipPopover } from '@Domain/Popovers';
import { LinkButton } from '@Domain/Buttons';
import { Inline } from '@Domain/Layouts';

<Inline align='left'>
 <TooltipPopover
     variant={TooltipPopover.Variant.Dark}
     toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) => (
       <div
         onMouseEnter={openMenu}
         onMouseLeave={closeMenu}
         ref={toggleComponentRef}
         {...ariaProps}
       >
         <LinkButton>
           <FontAwesomeIcon size='small' type='solid' icon='archive' />
         </LinkButton>
       </div>
     )}
   >
     View Achieve
  </TooltipPopover>
 <Inline.Item fill>
   <LinkButton fullWidth type='primary'>
     Create Template
   </LinkButton>
 </Inline.Item>
</Inline>
```

- A page may only have 1 primary action button.  Primary action sits at the right top corner with primary button style (no icon).
- Other actions are displayed in icon with a dark style tooltip popver. Most common used actions goes first from right to left.
- If no icon fits the use case, use default button instead. Text on page action buttons should be limited to one line on mobile view.

Page Action For mobile:
- Actions should be on **one line**. 
- Primary action should be **larger** than other actions. If not, it should split it on next line.

![page action for mobile](./image/PageActionForMobile.png)
