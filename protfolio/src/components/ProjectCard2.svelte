<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Contracting Era">
        At this point it was around covid and I was ready to do some paid work
        as a webdeveloper. Me and my partner made a webedv agency and started
        looking. Lucky for us that time was the absoule boom for such work.
        <br /><br />The idea of making my own synth still sat there itching my
        brain.
    </HoverParagraph>
    <HoverParagraph header="Human Threads"
        >The first project we took on was Human Threads. Since down, it was a
        virtual museum exhibition of art from a area in Wales. Goal was to
        connect the then isolating community. The exhibtion itself was physical
        with artists trying to make sense out of the situation and connect with
        their freinds.
        <br />
        <br />
        As this was during covid our agency was tasked with making a website for
        people that couldn't make the physical exhibition due to distance or a need
        to isolate. To this day this is the favorite project I've worked on</HoverParagraph
    >
    <HoverParagraph header="Inclusive Internet Index">
        First of the so far mentioned projects that's still accessible! <br
        />This is a website for the economist that we've worked on. A beautiful
        piece of data visualization that aimed to show how accessible and
        incluside internet is in various parts of the world.
        <br /> As so much of our lives right now are heavily tied to being able to
        access internet be it for work, leisure or even being able to find what social
        events are happening in the vicinty those metrics are an important view into
        how this almost essential service can be accessed and how people in different
        countries might live in it's absence.
    </HoverParagraph>
    <HoverParagraph header="Exporters Edge/UKEF">
        This was a project again for the economist. Made right before brexit it
        aimed to explain the new import and export rules that will be in place.
        <br />
        This while simpler than previous projects still offered new challanges in
        it's extensive use of SVG graphics.
    </HoverParagraph>
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
