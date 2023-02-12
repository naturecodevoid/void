import { writable } from "svelte/store";

export const openModals = writable(0);

function enabled() {
    let bgElement = document.querySelector("div#void-modal-background") as HTMLDivElement;
    if (!bgElement) return false;
    return bgElement.style.visibility == "visible";
}

export function toggleBackground() {
    if (enabled()) disableBackground();
    else enableBackground();
}

function getBgElement() {
    let bgElement = document.querySelector("div#void-modal-background");

    if (!bgElement) {
        bgElement = document.createElement("div");

        bgElement.id = "void-modal-background";
        bgElement.setAttribute(
            "style",
            `
            visibility: hidden;
            opacity: 0;

            position: fixed;
            top: -100px;
            left: 0;
            width: 100%;
            height: calc(100% + 100px);
            z-index: 200;

            transition: all 0.4s ease-in-out;
            --blur: 2px;
            background: rgba(0, 0, 0, 0.25);

            filter: blur(var(--blur));
            -webkit-backdrop-filter: blur(var(--blur));
            backdrop-filter: blur(var(--blur));
            `,
        );

        document.body.appendChild(bgElement);
    }

    return bgElement as HTMLDivElement;
}

export function enableBackground() {
    if (enabled()) return;

    const bgElement = getBgElement();
    bgElement.style.visibility = "visible";
    // allow for the background to fade in
    setTimeout(() => {
        bgElement.style.opacity = "1";
    }, 0);
}

export function disableBackground() {
    if (!enabled()) return;

    const bgElement = getBgElement();
    bgElement.style.visibility = "hidden";
    bgElement.style.opacity = "0";
}
