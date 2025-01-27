import { LitElement } from 'lit';
export declare class ImageTooltip extends LitElement {
    static styles: import("lit").CSSResult;
    offset: number;
    _target: Element | null;
    get target(): Element | null;
    set target(target: Element | null);
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    show: () => void;
    hide: () => void;
}
//# sourceMappingURL=image-tooltip.d.ts.map