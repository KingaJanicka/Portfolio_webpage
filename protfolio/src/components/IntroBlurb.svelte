<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
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
                    web-developer, musician, technologist and I love expressing
                    myself though tech. I am an artist with an established
                    creative practice, and so all my projects are deeply rooted
                    and intertwined with my other creative pursuits such as
                    performing live music or creating visual art
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
                        <div>NextJS</div>
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
                        <div>Google Workspaces</div>
                    </div></TextParagraph
                >
            </div>
            <div>
                <img
                    src="https://static.wikia.nocookie.net/silly-cat/images/e/ea/Gnapy.png/revision/latest?cb=20231005190830"
                    alt="Image of a silly cat"
                />
            </div>
        </div>
    </div>
</div>

<style>
    .mainContainer {
        padding-bottom: 10em;
        text-align: left;
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
            flex-direction: column;
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
