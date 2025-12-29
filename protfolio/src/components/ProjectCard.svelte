<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Training Montage">
        This should be a page about why I started to code. Some of my own first
        projects, languages etc
    </HoverParagraph>
    <HoverParagraph header="The Why">
        Initially I started learning how to code because I wanted to write my
        own synth - back then I wasn't even a serious musician, I just thought
        synths were really cool and that was reason enouhg for me to commit to
        learning.
        <br />
        I have read somewhere that people use C++ for it, so with no prior expreince
        and no one to tell me no I have started learning C++ as my first language.
        I have gotten as far with it as getting into JUCE and having some super simple
        plugins to compile
    </HoverParagraph>
    <HoverParagraph header="The How">
        Sadly even though I was really consistent with my C++ education my
        progress was rather slow which was to be expected - I was both self
        taught and have never coded before. At this point I've decided to pivot
        to learning web languages - they're signifacntly simpler for a beginner
        and my C++ served me well as I started with Typescript. Learning JS was
        much easier, especially after the uphill climb of C++ and it wasn't long
        until I had my first websites up
    </HoverParagraph>
    <HoverParagraph header="The Result"
        >My first page was chonky.cat - now defunct but formerly a cat image
        agregator. It would display images from a fine-tuned list of pages from
        reddit.
        <br />
        The purrfect page for when you want cute cats, but none of the distractions
        of social media</HoverParagraph
    >
</div>

<style>
    .mainContainer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        @media (max-width: 1024px) {
            height: 100%;
        }
    }
</style>
