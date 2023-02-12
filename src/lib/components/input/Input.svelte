<script lang="ts">
    import type { Writable } from "svelte/store";

    export let label: string | null = null;
    export let value: Writable<string>;
    export let multiline = false;
    export let otherProperties: Record<string, string> = {};
</script>

<div style={label ? "" : "margin-top: 20px"}>
    {#if label}
        <p style="margin-block-start: 0px;">{label}</p>
    {/if}
    {#if !multiline}
        <input bind:value={$value} {...otherProperties} />
    {:else}
        <textarea bind:value={$value} {...otherProperties} />
    {/if}
</div>
