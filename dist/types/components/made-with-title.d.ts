import { LitElement } from 'lit';
export declare class MadeWithTitle extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    sheepArr: string | null;
    count: number;
    sheep: string;
    private setTitle;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'made-with-title': MadeWithTitle;
    }
}
//# sourceMappingURL=made-with-title.d.ts.map