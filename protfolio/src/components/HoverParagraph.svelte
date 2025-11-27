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
    let innerHeight = $state(0);
    let outerHeight = $state(0);
    let heightBreakpoint = 0.75;
</script>

<svelte:window
    bind:innerHeight
    bind:outerHeight
    onwheel={() =>
        clientRectTracker.value?.y / innerHeight > heightBreakpoint
            ? (showBody = false)
            : (showBody = true)}
/>

<main>
    <div
        class="mainContainer"
        onmouseenter={() => (showBody = true)}
        onmouseleave={() =>
            clientRectTracker.value?.y / innerHeight < heightBreakpoint
                ? (showBody = true)
                : (showBody = false)}
        role="none"
        use:clientRectTracker
    >
        <!-- <pre>{JSON.stringify(clientRectTracker.value, null, 2)}</pre> -->
        <h2>{header}</h2>
        {#if showBody === true}
            <div class="textContainer" transition:fade={{ duration: 750 }}>
                <TextParagraph>
                    {@render children?.()}
                </TextParagraph>
            </div>
        {/if}
    </div>
</main>

<style>
    .mainContainer {
        padding: 1em 0em;
        position: relative;
        min-height: 15vh;
        width: 90vw;
    }
    h2 {
        margin: 0;
        text-align: left;
    }
    .textContainer {
        position: absolute;
        /* top: 50%; */
        /* left: 10%; */
        /* transform: translate(-50%, -50%); */
    }
</style>
