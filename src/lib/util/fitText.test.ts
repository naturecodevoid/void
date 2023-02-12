import { createCanvas } from "@napi-rs/canvas";

import { fitText } from "./fitText";

const ctx = createCanvas(1, 1).getContext("2d");

interface FakeElement {
    textContent: string;
    style: {
        fontSize: string;
    };
    getBoundingClientRect: (e: FakeElement) => { width: number };
}

function getWidth(fontSize: string, text: string) {
    ctx.font = fontSize + " Inter, Avenir, Helvetica, Arial, sans-serif";

    return ctx.measureText(text).width;
}

vi.stubGlobal("getComputedStyle", (e: FakeElement) => {
    return { fontSize: getWidth(e.style.fontSize, e.textContent) };
});

describe("fitText", () => {
    it("scales down to correct number", () => {
        const e: FakeElement = {
            textContent: "1234567890",
            style: {
                fontSize: "100px",
            },
            getBoundingClientRect: () => ({ width: getWidth(e.style.fontSize, e.textContent) }),
        };

        fitText(e.textContent, e.style.fontSize, e as any, 20);
        expect(e.style.fontSize).to.eq("3.5px");
    });
});
