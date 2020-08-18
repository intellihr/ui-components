Settings/ feature page should have `content` as `layoutType`, while form page should have `form` as `layoutType`

All pages should have **Breadcrumb Group**

All pages should have `backButtonProps` on Page component for **Back Link** when there is something to go back to

Breadcrumb Group should have **back page title** when there is something to go back to

All labels are in **Title Case**

Use `titleAction` on Page component for page action

![page layout type](./image/Page.png)

### Content Page
Breadcrumb Group:
- Breadcrumb should have back page title and page title

Page Title:
- Page title naming would be a domain decision. It may have more standard in future.

Page Description:
- A description is **required for all settings/ feature front pages** to provide context for **how/why/where** these settings are used and any **limitations** of the feature.

![content page](./image/ContentPage.png)

Page Action:
- Use `Inline` for page action and pass into `titleAction`
```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { TooltipPopover } from '@Domain/Popovers';
import { LinkButton } from '@Domain/Buttons';
import { Inline } from '@Domain/Layouts';

<Inline align='left'>
 <TooltipPopover
     variant={TooltipPopover.Variant.Dark}
     toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) => (
       <span
         onMouseEnter={openMenu}
         onMouseLeave={closeMenu}
         ref={toggleComponentRef}
         {...ariaProps}
       >
         <LinkButton>
           <FontAwesomeIcon size='small' type='solid' icon='archive' />
         </LinkButton>
       </span>
     )}
   >
     View Achieve
  </TooltipPopover>
 <Inline.Item fill>
   <LinkButton fullWidth type='primary'>
     Create Goal Template
   </LinkButton>
 </Inline.Item>
</Inline>
```

- A page may only have 1 primary action button.  Primary action sits at the right top corner with primary button style (no icon).
- Other actions are displayed in icon with a dark style tooltip popver. Most common used actions goes first from right to left.
- If no icon fits the use case, use default button instead. Text on page action buttons should be limited to one line on mobile view.

![page action](./image/PageAction.png)

Page Action For mobile:
- Actions should be on **one line**. 
- Primary action should be **larger** than other actions. If not, it should split it on next line.

![page action for mobile](./image/PageActionForMobile.png)

### Form Page
Breadcrumb Group:
- Breadcrumb should have back page and **action** (e.g. Create, Edit). 
- For person profile form, person name / person profile tab name / action. Person name will link to person profile page while tab name will link to specific tab

Page Title:
- Page title should be ‘**Action** Name’ ‘Item Name’

Page Description:
- Descriptions are optional for other pages and should be used when more context is necessary.
- Description is **only required when page has limitation**. 
- **Limitation and warning should show in description** instead of callout.

![form page](./image/FormPage.png)
