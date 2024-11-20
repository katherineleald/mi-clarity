<script lang="ts">
  import Icon from "@iconify/svelte";

  export let iconName: string;
  export let serviceTitle: string;
  export let serviceDescription: string;
</script>

<div class="flex flex-col items-center justify-center space-y-2">
  <div class="rounded-full p-3 md:p-5 border-[3px] border-blue-sapphire">
    <Icon icon={iconName} class="text-blue-sapphire text-5xl md:text-7xl" />
  </div>
  <h1 class="text-blue-sapphire font-bold font-montserrat text-xl lg:text-2xl">
    {serviceTitle}
  </h1>
  <p class="text-prussian-blue text-sm lg:text-lg w-full text-center">
    {serviceDescription}
  </p>
</div>
