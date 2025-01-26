import {customElement, property} from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { styles } from './style/get-sheep.css.ts';

@customElement('get-sheep')
export class GetSheep extends LitElement {
static styles = [styles];

@property({type: Array<Object>})
allData: any;

@property({type: Array<Object>}) 
tableData: any;

constructor() {
    super();
    this.allData = this.getAttribute("allData");
  }

  get sheepData() {
    console.log('this.allData', this.allData)
    let data =  this.allData.map((i: any) => ({ id: i.sheepId, name: i.name, sessionDate: i.sessionDate, img: i.img }));
    return data
  }

render() {
    // ${until(this.sheep, html`<span>Loading...</span>`)}
    console.log('this.data 2', this.allData)

    return html`
    <table class="sheep-table">
        <tbody>
        ${this.sheepData.map((i: any) => html`
        <tr onclick="window.location.href='/sheep/${i.id}'">
            ${Object.keys(i).filter((key) => key !== 'img').map((key) => html`<td>${i[key]}</td>`)}
        </tr>
        `)}
        </tbody>
    </table>
`;
}
}

declare global {
    interface HTMLElementTagNameMap {
      'get-sheep': GetSheep;
    }
  }