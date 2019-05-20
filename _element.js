import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `accordion-item`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AccordionItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'accordion-item',
      },
    };
  }
}

window.customElements.define('accordion-item', AccordionItem);
