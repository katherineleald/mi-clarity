<script lang="ts">
  import { onMount } from "svelte";
  
  export let bgImage: string;
  export let title: string;
  export let content: string;
  export let isHtml: boolean = false;

  let contentElement: HTMLElement;

  onMount(() => {
    if (isHtml && contentElement) {
      contentElement.innerHTML = content;
    }
  });
</script>

<div
  id="about-us-container"
  class="relative flex flex-col items-center justify-center p-8 h-60 md:h-[300px]"
>
  <div id="clip-triangle" class="absolute inset-0 w-full h-full bg-prussian-blue">
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-left-top opacity-30"
      style="background-image: url('/img/{bgImage}');"
    ></div>
  </div>
  <div
    id="clip-triangle-reverse"
    class="absolute inset-0 w-full h-full bg-blue-sapphire"
  ></div>
  <div
    id="about-us-content"
    class="z-10 relative w-full flex flex-col items-center justify-center text-white space-y-1 lg:space-y-3"
  >
    <h1 class="font-montserrat text-xl lg:text-2xl font-bold">{title}</h1>
    {#if isHtml}
      <div
        bind:this={contentElement}
        class="text-center text-base lg:text-lg leading-5 lg:leading-6"
      ></div>
    {:else}
      <p class="text-center text-base lg:text-lg leading-5 lg:leading-6">{content}</p>
    {/if}
  </div>
</div>

<style>
  #clip-triangle {
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }

  #clip-triangle-reverse {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
</style>
