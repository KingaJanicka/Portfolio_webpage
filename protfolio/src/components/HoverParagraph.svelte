<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import { fade } from "svelte/transition";
    let showBody = $state(false);
    interface Props {
        children: Snippet;
        header: string;
    }
    const { children, header }: Props = $props();
</script>

<svelte:document />
<main>
    <div
        class="mainContainer"
        onmouseenter={() => (showBody = true)}
        onmouseleave={() => (showBody = false)}
        role="none"
    >
        {#if showBody === false}
            <div class="textContainer" transition:fade={{ duration: 500 }}>
                <h2>{header}</h2>
            </div>
        {/if}
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
