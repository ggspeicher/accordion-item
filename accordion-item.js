/**
 * -accordion-panel-bg-color
 */

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
          margin: 0px;
          padding: 0px;
          
        }

        /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
        .active, .accordion:hover {
          background-color: #ccc;
        }

        .accordion {
          display: block;
          position: relative;
          background-color: #eee;
          color: #444;
          cursor: pointer;
          padding: 7px;
          left: 0px;
          right: 0px;
          vertical-align: middle;
          text-align: left;
          border: none;
          outline: none;
          transition: 0.4s;

          @apply --accordion-item-button;
        }

        .icon-image {
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;
          overflow: visible;
        }
        .text-space {
          display: inline-block; 
          vertical-align: middle;
          overflow: visible;
        }
        .panel {
          padding: 0 18px;
          left: 0px;
          right: 0px;

          background-color: white;
          display: block;
          overflow: hidden;
          transition: max-height 0.2s ease-out;
          max-height: 0px;
          background-color:var(--accordion-panel-bg-color, white);
          
          @apply --accordion-item-panel;
          
        }
        .active-panel {
         /* overflow: auto;*/
        }

        .title {
          display:block;
          color: black;
        }

        .subtitle {
          display:block;
          color: grey;
          font-size: 0.5 rem;
        }

      </style>
        <div class="accordion" onclick="[[_togglePanel()]]">
          
          <div class="icon-image">
            <slot name="icon"></slot>
          </div>

          <div class="text-space">
            <span class="title">[[title]]</span>
            <span class="subtitle">[[subtitle]] </span>
          </div>
            
        </div>
        <div id="panel" class$="[[_classes]]" style$="max-height: [[_panelHeight]]">
          <slot></slot>
        </div>
    `;
  }
  static get properties() {
    return {
      /**
       * @type {String} descripcion del item
       */
      title: {
        type: String,
        value: "title"
      },
      subtitle: {
        type: String,
        value: ' '
      },
      /**
       * @type {Boolean} Flag que interpreta si el accordeon se encuentra abierto
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true
      },
      _classes: {
        type: String,
        computed: '_showPanel(opened)',
        notify: true
      },
      _panelHeight: {
        type: String,
        computed:'_openUp(opened)',
        notify: true
      }
    };
  }
  constructor() {
    super();

  }
  _showPanel(opened){
    return opened?'panel active-panel':'panel';
  }

  _openUp(opened){
    /*console.log(this.$.panel.scrollHeight);*/
    return opened?`${this.$.panel.scrollHeight}px`:'0px';
    
  }

  _togglePanel(){
    return () =>{
      this.set("opened", !this.opened);
      // console.log(this.opened);
    }
  }
}

window.customElements.define('accordion-item', AccordionItem);
