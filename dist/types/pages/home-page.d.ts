import { LitElement } from 'lit';
import '../components/made-with-title';
import '../components/get-sheep';
export declare class HomePage extends LitElement {
    data?: any;
    sheepArr?: string[];
    constructor();
    fetchData(): Promise<void>;
    get sheepTable(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=home-page.d.ts.map