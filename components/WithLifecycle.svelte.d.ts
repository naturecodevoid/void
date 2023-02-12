import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        mount?: (() => void) | undefined;
        destroy?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type WithLifecycleProps = typeof __propDef.props;
export type WithLifecycleEvents = typeof __propDef.events;
export type WithLifecycleSlots = typeof __propDef.slots;
export default class WithLifecycle extends SvelteComponentTyped<WithLifecycleProps, WithLifecycleEvents, WithLifecycleSlots> {
}
export {};
