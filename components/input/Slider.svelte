<script>import { fitText } from "../../util/fitText";
import { onMount } from "svelte";
export let label = null;
export let value;
export let min = 0;
export let max = 100;
export let otherProperties = {};
let range;
let valueText;
onMount(() => {
  value.subscribe(updateValueText);
});
function updateValueText() {
  fitText($value.toString(), "14px", valueText, 23 - 2);
  calcLeft();
}
function calcLeft() {
  let { width } = range.getBoundingClientRect();
  width -= 20;
  const min2 = Number.parseFloat(range.min);
  const max2 = Number.parseFloat(range.max);
  const percentOfRange = ($value - min2) / (max2 - min2);
  const equalizer = percentOfRange * 4 - 2;
  valueText.parentElement.style.setProperty("--left", `${percentOfRange * width - equalizer - width / 2}px`);
}
</script>

<div {...otherProperties}>
    {#if label}
        <p style="margin-block-start: 0px;">{label}</p>
    {/if}
    <input type="range" bind:this={range} bind:value={$value} {min} {max} />
    <output><span bind:this={valueText} /></output>
</div>

<style>div {
  position: relative;
  margin-top: 20px;
}

input[type=range] {
  flex: 1;
  margin: 0;
  padding: 0;
  min-height: 23px;
  background: transparent;
  font: inherit;
}
input[type=range], input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  height: 10px;
  background: var(--outline);
}
input[type=range]::-moz-range-track {
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  height: 10px;
  background: var(--outline);
}
input[type=range]::-ms-track {
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  height: 10px;
  background: var(--outline);
}
input[type=range]::-webkit-slider-thumb {
  box-sizing: border-box;
  border: none;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: var(--secondary);
  position: relative;
  top: -6px;
  left: 0px;
}
input[type=range]::-moz-range-thumb {
  box-sizing: border-box;
  border: none;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: var(--secondary);
}
input[type=range]::-ms-thumb {
  box-sizing: border-box;
  border: none;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: var(--secondary);
}
input[type=range]::-ms-tooltip {
  display: none;
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
}</style>
