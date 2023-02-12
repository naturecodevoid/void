<script>export let label = null;
export let value;
export let multiline = false;
export let otherProperties = {};
</script>

<div style={label ? "" : "margin-top: 20px"} {...otherProperties}>
    {#if label}
        <p style="margin-block-start: 0px;">{label}</p>
    {/if}
    {#if !multiline}
        <input bind:value={$value} />
    {:else}
        <textarea bind:value={$value} />
    {/if}
</div>
