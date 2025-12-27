<script lang="ts">
    import type { Snippet } from "svelte";
    let date = new Date();
    let year = date.getFullYear();
</script>

<main>
    <hr class="line" />
    <div class="mainContainer">
        <div class="linkContainer">
            <h4>
                <a
                    href="https://github.com/KingaJanicka/"
                    target="_blank"
                    class="link">Github</a
                >
            </h4>
            <h4>
                <a
                    href="instagram.com/kingajanickaofficial/"
                    target="_blank"
                    class="link">Instagram</a
                >
            </h4>
            <h4>
                <!-- TODO: Pretty sure this mail does not work -->
                <a href="mailto:kinga@kinga.dev" class="link">Mail</a>
            </h4>
        </div>
        <div>© {year} Kinga Janicka. All rights reserved.</div>
    </div>
</main>

<style>
    .mainContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 3em;
    }
    .link {
        padding: 0.5em 2em;
        cursor: pointer;
    }
    .linkContainer {
        display: flex;
    }
    /* .line {
        width: 100%;
        height: 1px;
        background-color: white;
    } */
</style>
