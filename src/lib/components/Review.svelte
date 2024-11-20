<script lang="ts">
  import Icon from "@iconify/svelte";

  export let quote: string;
  export let author: string;
</script>

<div
  id="review"
  class="w-full px-4 py-8 space-y-3 shadow-md"
  style="background: radial-gradient(44.68% 100% at 100% 100%, rgba(100, 204, 197, 0.5) 0%, rgba(218, 255, 251, 0.5) 100%)"
>
  <cite id="quote" class="font-semibold text-prussian-blue text-lg">
    "{quote}".
  </cite>
  <div class="flex items-center justify-between">
    <div>
      <h1 id="author" class="text-lg font-montserrat font-semibold">
        — {author}
      </h1>
      <p id="company" class="text-sm font-montserrat">Google</p>
    </div>
    <div
      id="rating"
      class="rounded-full p-1 flex items-center justify-center space-x-1 bg-blue-sapphire text-medium-turquoise text-xl"
    >
      <Icon icon="ic:round-star" />
      <Icon icon="ic:round-star" />
      <Icon icon="ic:round-star" />
      <Icon icon="ic:round-star" />
      <Icon icon="ic:round-star" />
    </div>
  </div>
</div>
