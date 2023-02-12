<script>import { onMount, onDestroy } from "svelte";
export let mount = () => {
};
export let destroy = () => {
};
onMount(mount);
onDestroy(destroy);
</script>

<slot />
