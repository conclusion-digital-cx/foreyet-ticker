function html (i) { return i }

class MyClock extends HTMLElement {
  // Use createdCallback instead of constructor to init an element.
  createdCallback () {
    // This element uses Shadow DOM.
    this.createShadowRoot().innerHTML = html`
        <style>
        #clock {
        background: blue;
        width: 100px;
        position: absolute;
        left: 0px;
        bottom: 0px;
        font-size: 40px;
        height: 4rem;
        line-height: 4rem;
        color: white;
        display: inline-block;
        z-index: 100;
    }
        </style>
        <div id='clock'>
            10:23
        </div>

      `
  }

  // You can also define the other lifecycle methods.
  attachedCallback () {}
  detachedCallback () {}
  attributeChangedCallback () {}
}

document.registerElement('my-clock', MyClock)
