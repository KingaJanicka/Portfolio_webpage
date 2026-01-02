<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Contracting Era">
        Starting in 2020, I felt I was ready to do some paid work as a web
        developer. My partner and I founded an agency and started looking for
        contracts. Luckily for us, work was booming.
        <br />Although I enjoyed web development work, the idea of making my own
        synth still sat there, itching my brain.
    </HoverParagraph>
    <HoverParagraph header="Human Threads"
        >The first project we took on was called <a
            href="https://www.crewstudio.co/work/human-threads/"
            >"Human Threads"</a
        >, which was a virtual exhibition in conjunction with the Ceredigion
        Museum in Wales that intended to connect the then-isolating community.
        The exhibition itself was physical with artists trying to make sense out
        of the situation and connect with their friends, though there was also
        an extensive online gallery. Designs were provided by Crew Studio and we
        did most of the development work.
        <br />
        <br />
        As this was during covid our agency was tasked with making a website for
        people that couldn't make the physical exhibition due to distance or a need
        to isolate. To this day, it's my favorite project that I've worked on.</HoverParagraph
    >
    <HoverParagraph header="Inclusive Internet Index"
        >The Inclusive Internet Index was a project for The Economist
        Intelligence Unit, sponsored by Meta and developed in conjunction with
        Signal Noise. We were tasked with implementing a beautiful piece of data
        visualization depicted how accessible internet access is in various
        parts of the world.
        <br />I enjoyed working on it as so much of our lives right now are
        heavily tied to being able to access the internet — be it for work,
        leisure or even being able to find nearby social events.
    </HoverParagraph>
    <HoverParagraph header="Exporters Edge/UKEF">
        "Export's Edge" was another project for The Economist Intelligence Unit
        in conjunction with Signal Noise. Commissioned by UKEF, the UK
        government's export finance agency, it sought to explain the new rules
        coming into effect as a result of Brexit.
        <br />
        While simpler than previous projects, it still offered new challanges in
        its extensive use of SVG graphics.
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
            padding-bottom: 5em;
        }
    }
</style>
