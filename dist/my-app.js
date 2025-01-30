import { i, _ as __decorate, s, x, e } from './query-assigned-elements-868cdd0c.js';
import { n, R as Router } from './home-page-98f5aadc.js';
import './pages/about-page.js';
import './pages/contact-page.js';

let SheepDetailPage = class SheepDetailPage extends s {
    constructor() {
        super(...arguments);
        this.location = '';
    }
    // .clip-circle {
    //   clip-path: circle(60px at center);
    // }
    // .clip-polygon {
    //   clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    // }
    connectedCallback() {
        super.connectedCallback();
        // Get the ID from the current URL
        const pathArray = window.location.pathname.split('/');
        this.sheepId = pathArray[pathArray.length - 1];
        this.fetchData();
    }
    get sheepApiId() {
        return Number(this.sheepId) + 1;
    }
    async fetchData() {
        let url = `https://api.sheety.co/7ad3efa7402795a0f6d5c438fa02730d/britishSheep/sheep/${this.sheepApiId}`;
        fetch(url)
            .then((response) => response.json())
            .then(json => {
            this.sheepData = json.sheep;
            this.requestUpdate();
        })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    get wikilink() {
        if (this.sheepData.wikiLink) {
            return x `<a href=${this.sheepData.wikiLink} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/240px-Wikipedia-logo-v2-en.svg.png" alt="Wikipedia link" style="height:42px;"></a>`;
        }
    }
    get rbstlink() {
        if (this.sheepData.RBST) {
            return x `<a href=${this.sheepData.RBST} target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-PR54TwbDRGnvepCaJog7Rf0v6e7G5wL1w&s" alt="Rare Breeds Survival Trust" style="height:42px;"></a>`;
        }
    }
    get breedlink() {
        if (this.sheepData.breedSociety) {
            return x `<a href=${this.sheepData.breedSociety} target="_blank"><img src="https://png.pngtree.com/templates/sm/20180526/sm_5b0920af300a2.png" alt="Breed Society" style="width:42px;height:42px;"></a>`;
        }
    }
    render() {
        if (!this.sheepData || this.sheepData.sessionDate === 'TBD') {
            return x `
        <div class="detail">
          <div class="container">
            <img src='https://media1.tenor.com/m/-b-7vFdt_OEAAAAd/sheep-fail.gif' alt='return back later curently there is no information about this breed' width="400">
            <p class="centered">More information comming... eventually</p>
          </div>
          <button class="go-back-button" onclick="history.back()">Back to home page</button>
        </div>
        `;
        }
        else {
            return x `
        <div class="detail">
            <img src=${this.sheepData.img} alt=${this.sheepData.name} width="400">
            <div class="links">
                ${this.wikilink}
                ${this.rbstlink}
                ${this.breedlink}
            </div>
            <div class="about-text">
            <p>${this.sheepData.funfact1}</p>
            <p>${this.sheepData.funfact2}</p>
            <p>${this.sheepData.funfact3}</p>
            </div>
            <button class="go-back-button" onclick="history.back()">Back to home page</button>
        </div>
    `;
        }
    }
};
SheepDetailPage.styles = i `
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-weight: 900;
    color: lightblue;
  }

.container {
  position: relative;
  text-align: center;
  color: white;
  padding-top: 50px;
}

.detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
}

.go-back-button {
    text-transform: uppercase;
    font-weight: 900;
    width: 100%;
    background-color: pink;
    color: yellow;
    border: none;
    height: 50px;
}
`;
__decorate([
    n({ type: String })
], SheepDetailPage.prototype, "sheepId", void 0);
__decorate([
    n({ type: (Array) })
], SheepDetailPage.prototype, "sheepData", void 0);
__decorate([
    n({ type: String })
], SheepDetailPage.prototype, "location", void 0);
SheepDetailPage = __decorate([
    e('sheep-detail-page')
], SheepDetailPage);

let MyApp = class MyApp extends s {
    getBaseUrl() {
        const baseElement = document.querySelector('base');
        return (baseElement === null || baseElement === void 0 ? void 0 : baseElement.getAttribute('href')) || '/';
    }
    async firstUpdated() {
        var _a;
        const outlet = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#outlet');
        if (!outlet) {
            console.error('No outlet element found');
            return;
        }
        this.router = new Router(outlet);
        // Get base URL from base tag if it exists, otherwise use '/'
        const baseUrl = this.getBaseUrl();
        this.router.baseUrl = baseUrl;
        // Configure router
        this.router.setRoutes([
            {
                path: '/',
                component: 'home-page',
            },
            {
                path: '/about',
                component: 'about-page',
            },
            {
                path: '/contact',
                component: 'contact-page',
            },
            {
                path: '/sheep/:id',
                component: 'sheep-detail-page',
            },
            {
                path: '(.*)',
                redirect: '/',
            }
        ]);
        // this.router.baseUrl = baseUrl;
        // Wait for router to be ready
        try {
            await this.router.ready;
            console.log('Router is ready');
        }
        catch (error) {
            console.error('Router failed to initialize:', error);
        }
    }
    render() {
        const baseUrl = this.getBaseUrl();
        return x `
            <nav>
                <a href="${baseUrl}">Home</a>
                <a href="${baseUrl}about">About</a>
                <a href="${baseUrl}contact">Contact</a>
            </nav>
            <main id="outlet"></main>
        `;
    }
};
MyApp.styles = i `
        :host {
            display: block;
            min-height: 100vh;
        }
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
        }
        nav a:hover {
            background-color: #555;
        }
        main {
            padding: 2rem;
        }
    `;
MyApp = __decorate([
    e('my-app')
], MyApp);

export { MyApp };
//# sourceMappingURL=my-app.js.map
