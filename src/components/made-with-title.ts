import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('made-with-title')
export class MadeWithTitle extends LitElement {

  static styles = css`
    h1 {
      display: flex;
      justify-content: center;
      font-size: 50px;
      padding-top: 5%;
    }

    @media only screen and (max-width: 500px) {
      h1 {
        padding: 5%;
      }
    }
  `;

constructor() {
    super();
    this.sheepArr = this.getAttribute("sheepArr");
    this.setTitle();
  }

  @property()
  sheepArr;

  @property({type: Number})
  count = 0;

  @property({type: String})
  sheep = 'Wool';

  private setTitle() {
    setInterval(() => {
        if (this.sheepArr) {
            this.count === this.sheepArr.length - 1 ? this.count = 0 : this.count++;
            this.sheep = this.sheepArr[this.count]
        }
        this.requestUpdate()
    }, 1000);
  }

  override render() {
    return html`
      <h1>Made with ${this.sheep}</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'made-with-title': MadeWithTitle;
  }
}