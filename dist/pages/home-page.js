import { i as i$1, _ as __decorate, s, x, e as e$1 } from '../query-assigned-elements-868cdd0c.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

let MadeWithTitle = class MadeWithTitle extends s {
    constructor() {
        super();
        this.count = 0;
        this.sheep = 'Sheep';
        this.sheepArr = this.getAttribute("sheepArr");
        this.setTitle();
    }
    setTitle() {
        setInterval(() => {
            if (this.sheepArr) {
                this.count === this.sheepArr.length - 1 ? this.count = 0 : this.count++;
                this.sheep = this.sheepArr[this.count];
            }
            this.requestUpdate();
        }, 1000);
    }
    render() {
        return x `
      <h1>Made with ${this.sheep}</h1>
    `;
    }
};
MadeWithTitle.styles = i$1 `
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
__decorate([
    n()
], MadeWithTitle.prototype, "sheepArr", void 0);
__decorate([
    n({ type: Number })
], MadeWithTitle.prototype, "count", void 0);
__decorate([
    n({ type: String })
], MadeWithTitle.prototype, "sheep", void 0);
MadeWithTitle = __decorate([
    e$1('made-with-title')
], MadeWithTitle);

const styles = i$1 `

.sheep-table {
  padding: 0 15% 10% 15%;
}

tbody td {
    /* 1. Animate the background-color
       from transparent to white on hover */
    background-color: rgba(196,126,16,0);
    transition: all 0.2s linear; 
    transition-delay: 0.3s, 0s;
    /* 2. Animate the opacity on hover */
    opacity: 0.6;

    white-space: nowrap
  }
  tbody tr:hover td {
    background-color: rgba(196,126,16,1);
    transition-delay: 0s, 0s;
    opacity: 1;
    font-size: 2em;
    font-size: 20px;
  }

  tr {
    font-size: 15px;
  }
  
  td {
    /* 3. Scale the text using transform on hover */
    transform-origin: center left;
    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;

    white-space: nowrap
  }
  tr:hover td {
    transform: scale(1.1);
    font-size: 20px;
  }
  
  /* Codepen styling */
  * { box-sizing: border-box }
  
  table {
    width: 90%;
    margin: 0 5%;
    text-align: left;
  }
  th, td {
    padding: 0.5em;
  }

  @media only screen and (max-width: 500px) {
    .sheep-table {
      padding: 0 0 10% 0;
    }

    table {
      margin: 0;
    }
  }
`;

let GetSheep = class GetSheep extends s {
    constructor() {
        super();
        this.allData = this.getAttribute("allData");
    }
    get sheepData() {
        console.log('this.allData', this.allData);
        let data = this.allData.map((i) => ({ id: i.sheepId, name: i.name, sessionDate: i.sessionDate, img: i.img }));
        return data;
    }
    render() {
        // ${until(this.sheep, html`<span>Loading...</span>`)}
        console.log('this.data 2', this.allData);
        return x `
    <table class="sheep-table">
        <tbody>
        ${this.sheepData.map((i) => x `
        <tr onclick="window.location.href='/sheep/${i.id}'">
            ${Object.keys(i).filter((key) => key !== 'img').map((key) => x `<td>${i[key]}</td>`)}
        </tr>
        `)}
        </tbody>
    </table>
`;
    }
};
GetSheep.styles = [styles];
__decorate([
    n({ type: (Array) })
], GetSheep.prototype, "allData", void 0);
__decorate([
    n({ type: (Array) })
], GetSheep.prototype, "tableData", void 0);
GetSheep = __decorate([
    e$1('get-sheep')
], GetSheep);

let HomePage = class HomePage extends s {
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
            this.sheepArr = json.sheep.map((i) => (i.name));
            this.requestUpdate();
        })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    get sheepTable() {
        if (!this.data) {
            return x `
                <h4>🐑🐑🐑</h4>
            `;
        }
        else {
            return x `
            <get-sheep .allData=${this.data}></get-sheep>
        `;
        }
    }
    render() {
        return x `
      <main>
        <made-with-title .sheepArr=${this.sheepArr}></made-with-title>
        <about-page></about-page>
        ${this.sheepTable}
      </main>
    `;
    }
};
__decorate([
    n()
], HomePage.prototype, "data", void 0);
__decorate([
    n()
], HomePage.prototype, "sheepArr", void 0);
HomePage = __decorate([
    e$1('home-page')
], HomePage);

export { HomePage };
//# sourceMappingURL=home-page.js.map
