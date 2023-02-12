import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        bgColor?: string | undefined;
        shadowColor?: string | undefined;
        width?: string | undefined;
        topOnVisible?: string | undefined;
        show?: (() => void) | undefined;
        hide?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
    get show(): () => void;
    get hide(): () => void;
}
export {};
