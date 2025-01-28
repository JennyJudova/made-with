import { LitElement } from 'lit';
import './image-tooltip';
export declare class GetSheep extends LitElement {
    static styles: any[];
    allData: any;
    tableData: any;
    constructor();
    get sheepData(): any;
    private get baseUrl();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'get-sheep': GetSheep;
    }
}
//# sourceMappingURL=get-sheep.d.ts.map