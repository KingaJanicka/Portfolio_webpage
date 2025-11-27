<script lang="ts">
    import TextParagraph from "./TextParagraph.svelte";
    import HoverParagraph from "./HoverParagraph.svelte";
</script>

<div class="mainContainer">
    <HoverParagraph header="The Contracting Era">
        Mention all of the contracts right here, right now. Try to tie them into
        some sort of nice narrative, maybe say from covid onwards I started
        making music and the idea of making my own synth came back
    </HoverParagraph>
    <HoverParagraph header="Human Threads">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempor rhoncus massa sit amet molestie. Vivamus sed imperdiet felis, et
        congue quam. Nullam vulputate urna nec lorem condimentum pharetra. Nam
        auctor ligula non libero mollis, nec ullamcorper neque imperdiet. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus.
    </HoverParagraph>
    <HoverParagraph header="Inclusive Internet Index">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempor rhoncus massa sit amet molestie. Vivamus sed imperdiet felis, et
        congue quam. Nullam vulputate urna nec lorem condimentum pharetra. Nam
        auctor ligula non libero mollis, nec ullamcorper neque imperdiet. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus.
    </HoverParagraph>
    <HoverParagraph header="Exporters Edge/UKEF">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempor rhoncus massa sit amet molestie. Vivamus sed imperdiet felis, et
        congue quam. Nullam vulputate urna nec lorem condimentum pharetra. Nam
        auctor ligula non libero mollis, nec ullamcorper neque imperdiet. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus.
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
