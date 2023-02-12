import { SvelteComponentTyped } from "svelte";
import type { Writable } from "svelte/store";
declare const __propDef: {
    props: {
        label?: string | null | undefined;
        value: Writable<string>;
        multiline?: boolean | undefined;
        otherProperties?: Record<string, string> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
