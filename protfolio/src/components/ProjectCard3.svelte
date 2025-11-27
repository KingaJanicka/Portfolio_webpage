<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The (Music) Building years">
        I think here is where all thee creative computing should come full
        force. I can say how I've started performing music in the local scene
        and quickly grew to love it. Say that I kept the idea of making my own
        synth in the back of my head and that it eventually evolved into what
        now is pushpin
    </HoverParagraph>
    <HoverParagraph header="Music Perf stuff">
        So like just talk about music performance, why I started doing it and
        why I continuted. Talk about how it infuenced me as a person and how I
        started having the sense of a design language for performing live
    </HoverParagraph>
    <HoverParagraph header="Pushpin">
        Well, I am making the synth. Say something or something. maybey about
        how much I imporved as a dev and the goals behind the project
    </HoverParagraph>
    <HoverParagraph header="Industry Connections and University">
        Say how I went to machina with pushpin, how i met ppl in the industry
        and how it made me want to pursue uni to continiue helping other people
        express themselves
    </HoverParagraph>
</div>

<style>
    .mainContainer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 10em;
    }
</style>
