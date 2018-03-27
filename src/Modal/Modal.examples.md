# Modal

### A Simple Modal

```jsx
<div>
  <p><button className="button" data-open="example-modal">Click me for a modal</button></p>
  <Modal id="example-modal" size="large" className="example">
    <h1> Hello World </h1>
  </Modal>
</div>
```

### A Modal with Close Button

```jsx
<div>
  <p><button className="button" data-open="example-modal-2" >Modal With Close</button></p>
  <Modal id="example-modal-2" size="fixed-medium-up" className="example" showCloseButton>
    <h1> Hello World </h1>
  </Modal>
</div>
```
