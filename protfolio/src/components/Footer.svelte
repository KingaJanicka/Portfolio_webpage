<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
    let date = new Date();
    let year = date.getFullYear();
</script>

<main>
    <hr class="line" />
    <div class="mainContainer">
        <div>
            <h4>
                <a
                    href="https://github.com/KingaJanicka/"
                    target="_blank"
                    class="link">Github</a
                >
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
    }
    .link {
        cursor: pointer;
    }
    /* .line {
        width: 100%;
        height: 1px;
        background-color: white;
    } */
</style>
