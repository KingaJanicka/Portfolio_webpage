<script lang="ts">
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The (Music) Building years">
        At this point the idea of making my own synth started rearing it's head
        back in real time. I have also started to perform live electronic music
        in the local scene and quickly grew to love it. As I performed I started
        to slowly at first experiment with creative computing.<br />
        Those early experiments and extensive expreince performing is what eventually
        evolved into Pushpin
    </HoverParagraph>
    <HoverParagraph header="Music Performance">
        I have started performing on a whim after facebook served me an ad of a
        local electronic music open mic. Stressful at fist I have pushed at it
        again and again because of how exhilarting it was.
        <br /> Performing music has allowed me to grow as a person, made me more
        confident and gave me confidence to evolve into a truly
        multidisciplinary artist.
        <br /> A lot of Pushpin's design is heavily informed by my exprience performing
        electronic music and seeing what gaps there are in current offerings for
        artists that make music like I do
    </HoverParagraph>
    <HoverParagraph header="Pushpin">
        Annoyed that nothing was working quite like I wanted it to and not
        wanting to limit my musical expression to tools avaliable I started
        making my own open-source groovebox. It's an extensive projects that
        utilizes all of my past exprience and several other open-source projects
        in order to make the massive workload more managable for me.
        <br />Pushpin is made to be easy to hack by other people so they too can
        customize it to their own needs. For this end it's written in python
        with a lot of the menu structure in simple JSON files
    </HoverParagraph>
    <HoverParagraph header="Industry Connections and University">
        We have presented our idea at Machina Bristronica which is a synth expo.
        Our project was well recieved, even though it was in very early stages.
        I've met a lot of industry proffesionals there for which I am grateful -
        they've treated me like an equal and were excited to see what I have.
        This was the point where I realized that I could be doing this
        professionally and decided to go to Uni in order to get skills needed -
        mostly brush up on my C++ and learn about physical computing
    </HoverParagraph>
</div>

<style>
    .mainContainer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        @media (max-width: 1024px) {
            height: 100%;
        }
    }
</style>
