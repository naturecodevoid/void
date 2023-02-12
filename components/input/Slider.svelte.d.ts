import { SvelteComponentTyped } from "svelte";
import type { Writable } from "svelte/store";
declare const __propDef: {
    props: {
        label?: string | null | undefined;
        value: Writable<number>;
        min?: number | undefined;
        max?: number | undefined;
        otherProperties?: Record<string, string> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
export default class Slider extends SvelteComponentTyped<SliderProps, SliderEvents, SliderSlots> {
}
export {};
