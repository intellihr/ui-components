#### Profile Layout

This layout is used for pages that display profile details for an entity.

```jsx
const { Variables } = require('@Common');

<PageLayout layoutType='profile'>
  <PageLayout.Region regionType='top-left'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='top-right'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='header'>
    <div style={{backgroundColor: Variables.Color.n500, height: '240px', width: '100%'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
  </PageLayout.Region>
</PageLayout>
```
#### Simple Layout

This layout should be used for most pages

```jsx
const { Variables } = require('@Common');

<PageLayout layoutType='simple'>
  <PageLayout.Region regionType='top-left'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='top-right'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
  </PageLayout.Region>
</PageLayout>
```

#### Fullscreen Layout

This layout should be used for pages that require fullscreen such as the org chart

```jsx
const { Variables } = require('@Common');

<PageLayout layoutType='fullscreen'>
  <PageLayout.Region regionType='top-left'>
     <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
   </PageLayout.Region>
  <PageLayout.Region regionType='top-right'>
    <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
  </PageLayout.Region>
  <PageLayout.Region regionType='content'>
    <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
  </PageLayout.Region>
</PageLayout>
```

#### Legacy Layout

Layouts can be used in blade pages by using exposed class names
```jsx
const { Variables } = require('@Common');

<div class='profile-page-layout'>
  <div class='page-top-left-outer'>
    <div class='page-top-left-inner'>
      <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
    </div>
  </div>
  <div class='page-top-right-outer'>
    <div class='page-top-right-inner'>
       <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
    </div>
  </div>
  <div class='page-header-outer'>
    <div class='page-header-inner'>
      <div style={{backgroundColor: Variables.Color.n500, height: '240px', width: '100%'}}/>
    </div>
  </div>
  <div class='page-content-outer'>
    <div class='page-content-inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
    </div>
  </div>
</div>
```
```jsx
const { Variables } = require('@Common');

<div class='simple-page-layout'>
  <div class='page-top-left-outer'>
    <div class='page-top-left-inner'>
      <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
    </div>
  </div>
  <div class='page-top-right-outer'>
    <div class='page-top-right-inner'>
       <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
    </div>
  </div>
  <div class='page-content-outer'>
    <div class='page-content-inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
    </div>
  </div>
</div>
```
```jsx
const { Variables } = require('@Common');

<div class='fullscreen-page-layout'>
  <div class='page-top-left-outer'>
    <div class='page-top-left-inner'>
      <div style={{backgroundColor: Variables.Color.n300, height: '40px', width: 'auto'}}/>
    </div>
  </div>
  <div class='page-top-right-outer'>
    <div class='page-top-right-inner'>
       <div style={{backgroundColor: Variables.Color.n400, height: '40px', width: '300px'}}/>
    </div>
  </div>
  <div class='page-content-outer'>
    <div class='page-top-right-inner'>
      <div style={{backgroundColor: Variables.Color.n600, height: '500px', width: '100%'}}/>
    </div>
  </div>
</div>
```
