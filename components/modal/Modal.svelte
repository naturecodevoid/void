<script>import { onDestroy } from "svelte";
import { disableBackground, enableBackground, modalsOpen } from ".";
export let bgColor = "var(--bg)";
export let shadowColor = "var(--bg-shadow)";
export let width = "18rem";
export let topOnVisible = "50%";
let visible = false;
export function show() {
  if (visible)
    return;
  enableBackground();
  modalsOpen.set($modalsOpen + 1);
  visible = true;
}
export function hide() {
  if (!visible)
    return;
  if ($modalsOpen <= 1)
    disableBackground();
  modalsOpen.set($modalsOpen - 1);
  visible = false;
}
onDestroy(hide);
</script>

<div class="modal {visible ? 'visible' : ''}" style="--width: {width}; --bg-color: {bgColor}; --shadow-color: {shadowColor}; --modals-open: {$modalsOpen}; --top-on-visible: {topOnVisible}">
    <div class="content">
        <slot />
        <button on:click={hide}>Close</button>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        left: 50%;
        top: calc(100% + 400px);
        transform: translate(-50%, -50%);

        padding: 1em;
        border-radius: 0.75rem;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s ease-in-out;
        display: flex;
        flex-flow: column;
        max-height: calc(100% - 100px);
        overflow-y: hidden;

        background: var(--bg-color);
        box-shadow: var(--shadow-color) 2px 2px;
        width: var(--width);
        z-index: calc(200 + var(--modals-open));
    }

    .content {
        flex: 1;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .content::-webkit-scrollbar {
        display: none;
    }

    .visible {
        opacity: 1 !important;
        visibility: visible !important;
        top: var(--top-on-visible) !important;
    }
</style>
