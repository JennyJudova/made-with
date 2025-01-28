import { LitElement } from 'lit';
export declare class SheepDetailPage extends LitElement {
    sheepId: any;
    sheepData: any;
    location: string;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    get sheepApiId(): number;
    fetchData(): Promise<void>;
    get wikilink(): import("lit-html").TemplateResult<1> | undefined;
    get rbstlink(): import("lit-html").TemplateResult<1> | undefined;
    get breedlink(): import("lit-html").TemplateResult<1> | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sheep-detail-page': SheepDetailPage;
    }
}
//# sourceMappingURL=sheep-detail-page.d.ts.map