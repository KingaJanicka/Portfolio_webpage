<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import avatar from "../assets/avatar.jpg";
</script>

<div class="mainContainer">
    <div class="headerContainer">
        <h1>Portfolio</h1>
        <div class="card">
            <div class="textContainer">
                <h2>Kinga Janicka</h2>
                <h4>Creative Technologist</h4>
                <TextParagraph>
                    Hello my name is Kinga Janicka. I am a self-taught
                    web-developer, musician, technologist, and I love expressing
                    myself using technology. I am an artist with an established
                    creative practice, and all my projects are deeply rooted and
                    intertwined with my other creative pursuits such as
                    performing live music or creating visual art.
                </TextParagraph>
                <TextParagraph
                    ><b>Projects I've worked on include:</b> <br />
                    Pushpin: an open-source musical groovebox <br />
                    vis.kinga.dev: a VJing tool meant to emulate old feedback-based
                    workflows <br />
                    Various projects for Meta, UK Gov, Siemens
                </TextParagraph>
                <TextParagraph
                    ><b>My skills include:</b>
                    <div class="grid">
                        <div>JavaScript (ES2022)</div>
                        <div>Typescript</div>
                        <div>Python</div>
                        <div>React</div>
                        <div>Svelte</div>
                        <div>NextJS</div>
                        <div>p5js</div>
                        <div>CSS</div>
                        <div>Sass</div>
                        <div>HTML5</div>
                        <div>SVG</div>
                        <div>Rust</div>
                        <div>C++</div>
                        <div>JUCE</div>
                        <div>Daisy Seed</div>
                        <div>MaxMSP</div>
                        <div>PureData</div>
                        <div>touchDesigner</div>
                        <div>Google Workspaces</div>
                    </div></TextParagraph
                >
            </div>
            <div>
                <img src={avatar} alt="" />
            </div>
        </div>
    </div>
</div>

<style>
    .mainContainer {
        text-align: left;
        height: 100vh;
        @media (max-width: 1024px) {
            height: 100%;
            padding-bottom: 5em;
        }
    }
    img {
        padding: 2em;
        width: 30vw;
        @media (max-width: 1024px) {
            width: 75vw;
        }
    }
    .headerContainer {
        display: flex;
        flex-direction: column;
    }
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (max-width: 1024px) {
            flex-direction: column-reverse;
            align-items: flex-start;
        }
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 0.5em;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .textContainer {
        flex-direction: row;
        text-align: left;
    }
</style>
