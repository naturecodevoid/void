<script lang="ts">
    import { Input, Slider, storage } from "$lib";

    /*
    import { fitText } from "$lib/util/fitText";

    const outer = document.createElement("div");
    outer.style.width = "20px";
    document.body.appendChild(outer);

    const text = document.createElement("span");
    outer.appendChild(text);

    fitText("1234567890", "100px", text, outer.getBoundingClientRect().width);
    */

    const input = storage("input-test", "Input");
    const value = storage("value-test", 50);
</script>

<button on:click={() => console.log("Button click")}>Button</button>

<Slider label="Slider" {value} max={100} />
<Slider {value} max={100} />

<Input label="Input" value={input} />
<Input value={input} />

<Input value={input} multiline={true} />
