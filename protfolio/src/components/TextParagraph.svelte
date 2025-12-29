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
        margin: 0.5em 0em;
        @media (max-width: 1024px) {
            width: 90vw;
        }
    }
</style>
