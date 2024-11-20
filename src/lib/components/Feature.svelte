<script lang="ts">
  import Icon from "@iconify/svelte";

  export let iconName: string;
  export let featureTextBold: string;
  export let featureTextBase: string;
</script>

<div class="flex items-center justify-center space-x-2 ">
  <div class="rounded-full p-2.5 border-[3px] border-prussian-blue">
    <Icon icon={iconName} class="text-prussian-blue text-3xl md:text-5xl" />
  </div>
  <p class="text-prussian-blue text-base lg:text-xl w-full md:w-7/12"><span class="font-montserrat font-semibold">{featureTextBold}</span> {featureTextBase}</p>
</div>
