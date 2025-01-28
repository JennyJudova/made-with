// src/my-app.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

// Explicitly import page components
import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';
import './pages/sheep-detail-page';

@customElement('my-app')
export class MyApp extends LitElement {
    static styles = css`
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

    private router?: Router;

    firstUpdated() {
        const outlet = this.shadowRoot?.querySelector('#outlet');
        if (!outlet) {
            console.error('No outlet element found');
            return;
        }

        this.router = new Router(outlet);
        
        // Get base URL from base tag if it exists, otherwise use '/'
        const baseUrl = document.querySelector('base')?.href || '/';        
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

        this.router.baseUrl = baseUrl;
    }

    render() {
        const baseUrl = document.querySelector('base')?.href || '/';
        
        return html`
            <nav>
                <a href="${baseUrl}">Home</a>
                <a href="${baseUrl}about">About</a>
                <a href="${baseUrl}contact">Contact</a>
            </nav>
            <main id="outlet"></main>
        `;
    }
}

// Export the component
declare global {
    interface HTMLElementTagNameMap {
        'my-app': MyApp;
    }
}