/**
 * Scales down the given text to fit in the given outer element's width
 * @param text If the value property exists in textElement, it will be set to this. Otherwise, textContent will be used
 * @param originalSize The max/original font size of th text, including unit
 * @param textElement The text element
 * @param outerElementWidth The outer element's width in pixels; it is recommended to use `outerElement.getBoundingClientRect().width`
 * @param increment The amount of pixels to increment every time we decrease the font size
 * @param threshold The amount of pixels of difference between outer element width and text element width that makes this function do nothing
 * @returns
 */
export declare function fitText(text: string, originalSize: string, textElement: HTMLElement, outerElementWidth: number, increment?: number, threshold?: number): void;
