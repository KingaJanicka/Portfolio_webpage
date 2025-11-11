<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
</script>

<main>
    <div>
        <p>
            {@render children?.()}
        </p>
    </div>
</main>

<style>
    p {
        text-align: left;
    }
</style>
