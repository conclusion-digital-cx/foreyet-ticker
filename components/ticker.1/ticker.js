function html(i) { return i }

class StockTicker extends HTMLElement {

    // Use createdCallback instead of constructor to init an element.
    createdCallback() {
        // This element uses Shadow DOM.
        this.createShadowRoot().innerHTML = html `
        <style>
          :host {
            background: white;
            border:1 px black;
            font-size: 40px;
            display: inline-block;
            height:40px;
            overflow:hidden;
          }

          #quotes {
              position:absolute;
              width : 10000px;
          }

          div2 {
            animation-duration: 3s;
            animation-name: slidein;
          }
          
          @keyframes slidein {
            from {
              margin-left: 100%;
              width: 300%; 
            }
          
            to {
              margin-left: 0%;
              width: 100%;
            }
          }

          div {
    position: relative;
    animation: mymove 5s infinite;
    animation-timing-function: linear;
}

@keyframes mymove {
    from {left: 200px;}
    to {left: 0px;}
}
        </style>
        <div id="quotes">Lorem ipsom dia ✢ Medisch centrum ✢ Lorem ipsom dia ✢ Medisch centrum<div>
      `;
        //✢ ✥ ✦ ✧ ❂ ❉ ✱ ✲ ✴ ✵ ✶ ✷ ✸ ❇ ✹ ✺ ✻ ✼ ❈ ✮ ✡
        // Update the ticker prices.
        //this.updateQuotes(); // We'll define this later.
    }


    // You can also define the other lifecycle methods.
    attachedCallback() {}
    detachedCallback() {}
    attributeChangedCallback() {}
}

document.registerElement('stock-ticker', StockTicker)