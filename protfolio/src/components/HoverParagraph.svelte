<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import { fade } from "svelte/transition";
    import { createClientRectTracker } from "./tracker.svelte.js";
    const clientRectTracker = createClientRectTracker();
    let showBody = $state(false);
    interface Props {
        children: Snippet;
        header: string;
    }
    const { children, header }: Props = $props();
</script>

<main>
    <div
        class="mainContainer"
        onmouseenter={() => (showBody = true)}
        onmouseleave={() => (showBody = false)}
        role="none"
        use:clientRectTracker
    >
        <pre>{JSON.stringify(clientRectTracker.value, null, 2)}</pre>
        <h2>{header}</h2>
        {#if showBody === true}
            <div class="textContainer" transition:fade={{ duration: 500 }}>
                <TextParagraph>
                    {@render children?.()}
                </TextParagraph>
            </div>
        {/if}
    </div>
</main>

<style>
    .mainContainer {
        position: relative;
        min-height: 15vh;
        width: 90vw;
    }
    h2 {
        text-align: left;
    }
    .textContainer {
        position: absolute;
        /* top: 50%; */
        /* left: 10%; */
        /* transform: translate(-50%, -50%); */
    }
</style>
