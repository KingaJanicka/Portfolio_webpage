<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Traning Montage">
        This should be a page about why I started to code. Some of my own first
        projects, languages etc
    </HoverParagraph>
    <HoverParagraph header="The Why">
        I think mentioning how I always wanted to write synths would be really
        good here. Mention I self taught myself C++ and dabbled in JUCE
    </HoverParagraph>
    <HoverParagraph header="The How">
        Then pivot to how I started learning JS and web languages, how that
        seemed like a much faster way to becoming proficient at coding and to
        work.
    </HoverParagraph>
    <HoverParagraph header="The Result"
        >I think mentioning early web projects like chonky.cat needs to be here
        too</HoverParagraph
    >
</div>

<style>
    .mainContainer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }
</style>
