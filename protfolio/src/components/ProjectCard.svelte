<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Training Montage">
        I have always taken interest in STEM subjects. The degree I initially
        started back in Poland before I've moved to UK was Mechatronics - a
        multidisiplinary engineering degree that focuses on broad understanding
        of subject domain. After moving I wanted to continue in roughly the same
        direction and so I've started teaching myself programming.
    </HoverParagraph>
    <HoverParagraph header="The Why">
        Initially I started learning how to code because I wanted to write my
        own synthesiser - back then I wasn't even a serious musician, I just
        thought synths were really cool and that was reason enough for me to
        commit to learning.
        <br />
        I had read somewhere that people use C++ for that kind of project, so with
        no prior experience and no one to tell me no I have started learning C++
        as my first language. I have gotten as far with it as getting into JUCE and
        compiling some simple plugins.
    </HoverParagraph>
    <HoverParagraph header="The How">
        Sadly even though I was really consistent with my C++ education, my
        progress was admittedly rather slow — I was both teaming myself and had
        never coded before. At that point I decided to pivot to learning web
        languages — they're significantly simpler for a beginner and my C++
        knowledge served me well when I started with Typescript. I found
        learning JavaScript much easier, especially after the uphill climb of
        C++. It wasn't long until I had my first websites up.
    </HoverParagraph>
    <HoverParagraph header="The Result"
        >My first web project was chonky.cat - now defunct but formerly a cat
        image agregator. It would display images from a fine-tuned list of pages
        from reddit.
        <br />
        The purrfect page for when you want cute cats, but with none of the distractions
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
            padding-bottom: 5em;
        }
    }
</style>
