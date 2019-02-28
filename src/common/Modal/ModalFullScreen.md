Use sample of Modal Fullscreen

```js
initialState = {
  open: false,
};

const title = 'Some title for ModalFullScreen';
const handleOpen = () => setState({ open: true });
const handleClose = () => setState({ open: false });

<div>
  <button onClick={handleOpen}>Click me for open Modal</button>
  <ModalFullScreen open={state.open} {...{ handleClose, title }}>
    <div style={{ color: 'white' }}>
      <h1>Some text wrote for ModalFullScreen</h1>
      <p>Some text wrote for ModalFullScreen</p>
    </div>
  </ModalFullScreen>
</div>;
```
