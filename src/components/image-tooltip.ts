import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Events to turn on/off the tooltip
const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

@customElement('image-tooltip')
export class ImageTooltip extends LitElement {

  static styles = css`
    :host {
      display: flex;
      position: fixed;
      z-index: 1;
      padding: 4px;
      border: rgba(196,126,16,1);
      background: rgba(196,126,16,1);
      pointer-events: none;
    }
  `;

  // Position offset
  @property({type: Number})
  offset = 4;

  _target: Element|null = null;

  get target() {
    return this._target;
  }
  set target(target: Element|null) {
    // Remove events from existing target
    if (this.target) {
      enterEvents.forEach(name =>
        this.target!.removeEventListener(name, this.show));
      leaveEvents.forEach(name =>
        this.target!.removeEventListener(name, this.hide));
    }
    // Add events to new target
    if (target) {
      enterEvents.forEach(name =>
        target!.addEventListener(name, this.show));
      leaveEvents.forEach(name =>
        target!.addEventListener(name, this.hide));
    }
    this._target = target;
  }

  connectedCallback() {
    super.connectedCallback();
    this.hide();
    this.target ??= this.previousElementSibling;
  }

  render() {
    return html`<slot></slot>`;
  }

  show = () => {
    this.style.cssText = '';
    // Position the tooltip near the target.
    const {x, y, height} = this.target!.getBoundingClientRect();
    this.style.left = `${x}px`;
    this.style.top = `${y + height + this.offset}px`;
  }

  hide = () => {
    this.style.display = 'none';
  };

}