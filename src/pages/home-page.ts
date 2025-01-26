import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '../components/made-with-title';
import '../components/get-sheep';

@customElement('home-page')
export class HomePage extends LitElement {
  @property() 
  data?: any;

  @property() 
  sheepArr?: string[];


  constructor() {
    super();
    this.fetchData();
  }

  async fetchData() {

    let url = 'https://api.sheety.co/7ad3efa7402795a0f6d5c438fa02730d/britishSheep/sheep';

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            this.data = json.sheep;
            this.sheepArr = json.sheep.map((i: any) => (i.name));
            this.requestUpdate();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  }

    get sheepTable() {

        if (!this.data) {
            return html`
                <h4>🐑🐑🐑</h4>
            `;
        } else {
            return html`
            <get-sheep .allData=${this.data}></get-sheep>
        `;
        }
    }

  override render() {
    return html`
      <main>
        <made-with-title .sheepArr=${this.sheepArr}></made-with-title>
        <about-page></about-page>
        ${this.sheepTable}
      </main>
    `;
  }
}
