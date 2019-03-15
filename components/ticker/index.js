function html (i) { return i }

class StockTicker extends HTMLElement {
  // Use createdCallback instead of constructor to init an element.
  createdCallback () {
    // This element uses Shadow DOM.
    this.createShadowRoot().innerHTML = html`
        <style>
          
        @-webkit-keyframes ticker {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }
    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes ticker {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }
    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

.ticker-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    height: 4rem;
    background-color: white;
    padding-left: 100%;
}

.ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
}

.ticker__item {
    display: inline-block;
    /* padding: 0 2rem; */
    font-size: 2rem;
    color: black;
}

body {
    padding-bottom: 5rem;
}

h1,
h2,
p {
    padding: 0 5%;
}
        </style>
        
        <div class="ticker-wrap">
        <div class="ticker">
            <div class="ticker__item">Letterpress chambray brunch. ✢</div>
            <div class="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica. ✢</div>
            <div class="ticker__item">Ugh PBR&B kale chips Echo Park. ✢</div>
            <div class="ticker__item">Gluten-free mumblecore chambray mixtape food truck. ✢</div>
            <!--<div class="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>  <div class="ticker__item">Letterpress chambray brunch.</div>  <div class="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>  <div class="ticker__item">Ugh PBR&B kale chips Echo Park.</div>  <div class="ticker__item">Gluten-free mumblecore chambray mixtape food truck. </div>  <div class="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>--></div>
    </div>

      `
    // ✢ ✥ ✦ ✧ ❂ ❉ ✱ ✲ ✴ ✵ ✶ ✷ ✸ ❇ ✹ ✺ ✻ ✼ ❈ ✮ ✡
    // Update the ticker prices.
    // this.updateQuotes(); // We'll define this later.
  }

  // You can also define the other lifecycle methods.
  attachedCallback () {}
  detachedCallback () {}
  attributeChangedCallback () {}
}

document.registerElement('stock-ticker', StockTicker)
