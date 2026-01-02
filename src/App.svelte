<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import IntroBlurb from "./components/IntroBlurb.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import ProjectCard2 from "./components/ProjectCard2.svelte";
  import ProjectCard3 from "./components/ProjectCard3.svelte";
</script>

<svelte:window />
<main>
  <article class="main">
    <div class="item">
      <IntroBlurb />
    </div>

    <hr class="line" />
    <div class="item">
      <ProjectCard />
    </div>
    <hr class="line" />
    <div class="item">
      <ProjectCard2 />
    </div>
    <hr class="line" />
    <div class="item">
      <ProjectCard3 />
    </div>
    <div class="item">
      <Footer />
    </div>
  </article>
</main>

<style>
  main {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    @media (max-width: 1024px) {
      scroll-snap-type: none;
      overflow-y: none;
    }
  }
  .item {
    scroll-snap-align: start;
  }
  .line {
    width: 60%;
  }
</style>
