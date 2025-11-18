<script lang="ts">
  import IntroBlurb from "./components/IntroBlurb.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import ProjectCard2 from "./components/ProjectCard2.svelte";
  import ProjectCard3 from "./components/ProjectCard3.svelte";
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<main>
  {y}
  <IntroBlurb />
  {y}
  <ProjectCard />
  <ProjectCard2 />
  <ProjectCard3 />
</main>

<style>
  main {
    scroll-snap-type: y mandatory;
  }
</style>
