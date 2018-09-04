#### Profile Layout

This layout is used for pages that display profile details for an entity.

```jsx
const { Variables } = require('@Common');

<PageLayout layoutType='profile'>
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
const { Variables } = require('@Common');

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
const { Variables } = require('@Common');

<PageLayout layoutType='fullscreen'>
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
const { Variables } = require('@Common');

<div class='ihr-layout ihr-layout--profile'>
   <div class='ihr-layout__top--outer'>
     <div class='ihr-layout__top--inner'>
       <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
     </div>
   </div>
  <div class='ihr-layout__header--outer'>
    <div class='ihr-layout__header--inner'>
      <div style={{backgroundColor: Variables.Color.n500, height: '240px'}}/>
    </div>
  </div>
  <div class='ihr-layout__content--outer'>
    <div class='ihr-layout__content--inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
    </div>
  </div>
</div>
```
```jsx
const { Variables } = require('@Common');

<div class='ihr-layout ihr-layout--simple'>
  <div class='ihr-layout__top--outer'>
    <div class='ihr-layout__top--inner'>
      <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
    </div>
  </div>
  <div class='ihr-layout__content--outer'>
    <div class='ihr-layout__content--inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
    </div>
  </div>
</div>
```
```jsx
const { Variables } = require('@Common');

<div class='ihr-layout ihr-layout--fullscreen'>
  <div class='ihr-layout__top--outer'>
    <div class='ihr-layout__top--inner'>
      <div style={{backgroundColor: Variables.Color.n400, height: '40px'}}/>
    </div>
  </div>
  <div class='ihr-layout__content--outer'>
    <div class='ihr-layout__content--inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px'}}/>
    </div>
  </div>
</div>
```
