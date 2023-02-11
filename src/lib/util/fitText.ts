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
export function fitText(text: string, originalSize: string, textElement: HTMLElement, outerElementWidth: number, increment = 0.25, threshold = 0.5) {
    if ("value" in textElement) textElement.value = text;
    else textElement.textContent = text;

    if (Math.abs(textElement.getBoundingClientRect().width - outerElementWidth) < threshold) return console.debug("skipping because of threshold");

    textElement.style.fontSize = originalSize;
    textElement.style.width = "unset";

    if (textElement.getBoundingClientRect().width < outerElementWidth) return console.debug("text fits in outer element");

    let currentFontSize = Number.parseFloat(getComputedStyle(textElement).fontSize);

    while (textElement.getBoundingClientRect().width > outerElementWidth) {
        currentFontSize -= increment;
        if (currentFontSize < 0) currentFontSize = increment;
        textElement.style.fontSize = currentFontSize.toString() + "px";
        if (currentFontSize <= increment) break;
    }

    console.debug(`adjusted text size to ${textElement.style.fontSize} from ${originalSize}`);
}
