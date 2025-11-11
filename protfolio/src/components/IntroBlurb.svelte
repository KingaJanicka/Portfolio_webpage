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
                    creative practise, and so all my projects are deeply rooted
                    and intertwined with my other creative pursiuts such as
                    performing live music or creating visual art
                </TextParagraph>
                <TextParagraph
                    >Projects I've worked on include: <br />
                    Pushpin: an open-source musical groovebox <br />
                    vis.kinga.dev: a VJing tool meant to emulate old feedback based
                    workflows <br />
                    Various projects for Meta, UK Gov, Siemens
                </TextParagraph>
                <TextParagraph>Scroll down to find out more</TextParagraph>
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
        height: 100vh;
        text-align: left;
        scroll-snap-align: start;
    }
    .headerContainer {
        display: flex;
        flex-direction: column;
    }
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .textContainer {
        flex-direction: row;
        text-align: left;
    }
</style>
