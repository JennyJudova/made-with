import { i, _ as __decorate, s, x, e } from './query-assigned-elements-868cdd0c.js';
import { R as Router } from './home-page-fa31a89b.js';
import './pages/about-page.js';
import './pages/contact-page.js';
import './pages/sheep-detail-page.js';
import './property-0b2330ac.js';

let MyApp = class MyApp extends s {
    firstUpdated() {
        var _a, _b;
        const outlet = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#outlet');
        if (!outlet) {
            console.error('No outlet element found');
            return;
        }
        this.router = new Router(outlet);
        // Get base URL from base tag if it exists, otherwise use '/'
        const baseUrl = ((_b = document.querySelector('base')) === null || _b === void 0 ? void 0 : _b.href) || '/';
        console.log('baseUrl', baseUrl);
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
        console.log('this.router', this.router);
        this.router.baseUrl = baseUrl;
    }
    render() {
        var _a;
        const baseUrl = ((_a = document.querySelector('base')) === null || _a === void 0 ? void 0 : _a.href) || '/';
        return x `
            <nav>
                <a href="${baseUrl}">Home</a>
                <a href="${baseUrl}about">About</a>
                <a href="${baseUrl}contact">Contact</a>
                <a href="${baseUrl}sheep/2">Test sheep</a>
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
