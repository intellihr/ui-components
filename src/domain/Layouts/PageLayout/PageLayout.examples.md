#### Profile Layout

This layout is used for pages that display profile details for an entity.

```jsx
import { Variables } from '@Common';

<PageLayout layoutType='profile'>
  <PageLayout.Region regionType='top'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='header'>
    <div style={{backgroundColor: Variables.Color.n500, height: '240px'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px', borderRadius: '4px'}}/>
  </PageLayout.Region>
</PageLayout>
```
#### Index Layout

This layout is used for pages that display information with a search bar or jumbotron.

```jsx
import { Variables } from '@Common';

<PageLayout layoutType='index'>
  <PageLayout.Region regionType='top'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='header'>
    <div style={{backgroundColor: Variables.Color.n500, height: '240px'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </PageLayout.Region>
</PageLayout>
```
#### Simple Layout

This layout should be used for most pages

```jsx
import { Variables } from '@Common';

<PageLayout layoutType='simple'>
  <PageLayout.Region regionType='top'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </PageLayout.Region>
</PageLayout>
```

#### Fullscreen Layout

This layout should be used for pages that require fullscreen such as the org chart

```jsx
import { Variables } from '@Common';

<PageLayout layoutType='fullscreen'>
  <PageLayout.Region regionType='top'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </PageLayout.Region>
</PageLayout>
```

#### Form Layout

This layout should be used for forms, it is a quick fix to center them on the page
since they are a max width of 900 instead of 1440

```jsx
import { Variables } from '@Common';

<PageLayout layoutType='form'>
  <PageLayout.Region regionType='top'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </PageLayout.Region>
</PageLayout>
```

#### Plain HTML Layout

Layouts can be used in plain html files by using global class names
```jsx
import { Variables } from '@Common';

<div class='ihr-layout ihr-layout--profile'>
  <div class='ihr-layout__top'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
  </div>
  <div class='ihr-layout__header'>
    <div style={{backgroundColor: Variables.Color.n500, height: '240px'}}/>
  </div>
  <div class='ihr-layout__content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px', borderRadius: '4px'}}/>
  </div>
</div>
```
```jsx
import { Variables } from '@Common';

<div class='ihr-layout ihr-layout--simple'>
  <div class='ihr-layout__top'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
  </div>
  <div class='ihr-layout__content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </div>
</div>
```
```jsx
import { Variables } from '@Common';

<div class='ihr-layout ihr-layout--form'>
  <div class='ihr-layout__top'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
  </div>
  <div class='ihr-layout__content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </div>
</div>
```
```jsx
import { Variables } from '@Common';

<div class='ihr-layout ihr-layout--fullscreen'>
  <div class='ihr-layout__top'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
  </div>
  <div class='ihr-layout__content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
  </div>
</div>
```
