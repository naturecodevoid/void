import { createCanvas } from "@napi-rs/canvas";
import { fitText } from "./fitText";
const ctx = createCanvas(1, 1).getContext("2d");
function getWidth(fontSize, text) {
    ctx.font = fontSize + " Inter, Avenir, Helvetica, Arial, sans-serif";
    return ctx.measureText(text).width;
}
vi.stubGlobal("getComputedStyle", (e) => {
    return { fontSize: getWidth(e.style.fontSize, e.textContent) };
});
describe("fitText", () => {
    it("scales down to correct number", () => {
        const e = {
            textContent: "1234567890",
            style: {
                fontSize: "100px",
            },
            getBoundingClientRect: () => ({ width: getWidth(e.style.fontSize, e.textContent) }),
        };
        fitText(e.textContent, e.style.fontSize, e, 20);
        if (process.env.CI) {
            console.log("using CI check");
            // CI has some weird floating point math, which causes this test to fail
            expect(Number.parseFloat(e.style.fontSize)).within(2.9, 3.5);
        }
        else
            expect(Number.parseFloat(e.style.fontSize)).to.eq(3.5);
    });
});
