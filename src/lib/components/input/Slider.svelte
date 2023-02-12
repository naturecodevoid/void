<script lang="ts">
    import { fitText } from "$lib/util/fitText";
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let label: string | null = null;
    export let value: Writable<number>;
    export let min: number = 0;
    export let max: number = 100;
    export let otherProperties: Record<string, string> = {};

    let range: HTMLInputElement;
    let valueText: HTMLSpanElement;

    onMount(() => {
        value.subscribe(updateValueText);
    });

    function updateValueText() {
        fitText($value.toString(), "14px", valueText, 23 - 2);
        calcLeft();
    }

    function calcLeft() {
        const { width } = range.getBoundingClientRect();

        const min = Number.parseFloat(range.min);
        const max = Number.parseFloat(range.max);

        const percentOfRange = ($value - min) / (max - min);
        const equalizer = percentOfRange * 4 - 2;

        valueText.parentElement!.style.setProperty("--left", `${percentOfRange * (width / 1.1155) - equalizer - width / 2 + 10}px`);
    }
</script>

<div {...otherProperties}>
    {#if label}
        <p style="margin-block-start: 0px;">{label}</p>
    {/if}
    <input type="range" bind:this={range} bind:value={$value} {min} {max} />
    <output><span bind:this={valueText} /></output>
</div>

<style lang="scss">
    div {
        position: relative;
        margin-top: 20px;
    }

    // https://codepen.io/thebabydino/pen/WdeYMd

    @mixin track() {
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        height: 10px;
        background: var(--outline);
    }

    $thumb: 23px;
    @mixin thumb() {
        box-sizing: border-box;
        border: none;
        width: $thumb;
        height: $thumb;
        border-radius: 50%;
        background: var(--secondary);
    }

    input[type="range"] {
        &,
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
        }

        flex: 1;
        margin: 0;
        padding: 0;
        min-height: $thumb;
        background: transparent;
        font: inherit;

        &::-webkit-slider-runnable-track {
            @include track();
        }
        &::-moz-range-track {
            @include track;
        }
        &::-ms-track {
            @include track;
        }

        &::-webkit-slider-thumb {
            @include thumb;
        }
        &::-moz-range-thumb {
            @include thumb;
        }
        &::-ms-thumb {
            @include thumb;
        }

        &::-ms-tooltip {
            display: none;
        }
    }

    output {
        display: block;
        position: relative;
        font-size: 14px;
        top: -30px;
        height: 10px;
        left: var(--left);
        border-radius: 3px;
        user-select: none;
        pointer-events: none;
    }
</style>
