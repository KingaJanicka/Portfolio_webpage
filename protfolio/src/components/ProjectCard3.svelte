<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The (Music) Building years">
        Despite being very busy with development work, I was still passionate
        about audio synthesis. I had started to perform live electronic music in
        the local scene and quickly grew to love it. As I performed I started to
        slowly experiment with creative computing.<br />
        Those early experiments and my extensive experience performing is what eventually
        evolved into Pushpin.
    </HoverParagraph>
    <HoverParagraph header="Music Performance">
        I started performing live techno after Facebook served me an ad for an
        local electronic music open mic night. Although stressful at first, I
        have continued experimenting and performing because I find it utterly
        exhilarating.
        <br /> Performing music has allowed me to grow as a person, made me more
        confident and given me a drive to evolve into a truly multidisciplinary
        artist.
        <br /> A lot of Pushpin's design is heavily informed by my exprience performing
        electronic music and seeing what gaps there are in current offerings for
        artists that make music like I do.
    </HoverParagraph>
    <HoverParagraph header="Pushpin">
        Annoyed that nothing was working quite like I wanted it to and not
        wanting to limit my musical expression to tools available, I started
        making my own open-source groovebox. It's an extensive codebase that
        utilises all of my past experience and leverages several open-source
        projects.
        <br />Pushpin is designed from the ground up to be infinitely hackable,
        letting artists customise it to their own needs. It's written in Python,
        with a lot of the menus configured using simple JSON files.
    </HoverParagraph>
    <HoverParagraph header="Industry Connections and University">
        I first presented Pushpin at Machina Bristronica, which is a yearly
        synth expo in Bristol. Our project was well recieved, even though it was
        in very early stages. I met a lot of industry professionals there, for
        which I am grateful — they treated me like an equal and were excited by
        my work. At this point I realised that I could be doing this
        professionally and decided to enrol to university.
    </HoverParagraph>
</div>

<style>
    .mainContainer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        @media (max-width: 1024px) {
            height: 100%;
            padding-bottom: 5em;
        }
    }
</style>
