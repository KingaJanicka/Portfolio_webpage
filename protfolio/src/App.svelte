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

    <div class="item">
      <hr class="line" />
      <ProjectCard />
    </div>
    <div class="item">
      <hr class="line" />
      <ProjectCard2 />
    </div>
    <div class="item">
      <hr class="line" />
      <ProjectCard3 />
    </div>
    <div class="item">
      <Footer />
    </div>
  </article>
</main>

<style>
  main {
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    height: 100vh;
  }
  .item {
    scroll-snap-align: start;
  }
  .line {
    width: 60%;
  }
</style>
