<script lang="ts">
  import { onMount } from "svelte";
  import { Menu, X } from "lucide-svelte";
  import { fade, fly, slide } from "svelte/transition";

  let scrolled = false;
  let innerWidth: number;
  let responsiveMenu = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 0;
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function toggleResponsiveMenu() {
    responsiveMenu = !responsiveMenu;
  }

  const menuItems = [
    { href: "#home", text: "Inicio" },
    { href: "#about-us", text: "¿Quiénes somos?" },
    { href: "#clients", text: "Clientes" },
    { href: "#services", text: "Servicios" },
  ];
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <style>
    :root {
      --header-height: 5rem; /* 80px = 5rem */
    }
    html {
      scroll-padding-top: var(--header-height);
    }
    body {
      padding-top: var(--header-height);
    }
  </style>
</svelte:head>

<header
  class={`w-full h-[var(--header-height)] z-20 flex items-center justify-between fixed top-0 transition-colors duration-200 ease-in-out ${
    scrolled
      ? "bg-light-cyan text-prussian-blue"
      : "bg-transparent text-light-cyan"
  } ${innerWidth < 768 ? "px-4" : "px-8"}`}
>
  {#if innerWidth < 1020}
    <!-- Menu Responsive -->
    <div class="flex items-center justify-start space-x-3">
      <button on:click={toggleResponsiveMenu} class="appearance-none">
        <Menu />
      </button>
      <div
        id="logo"
        class="rounded-full border-2 font-montserrat w-fit p-2 text-xl font-semibold"
        class:border-light-cyan={!scrolled}
        class:border-prussian-blue={scrolled}
      >
        LOGO
      </div>
    </div>
    <button
      id="access"
      class="rounded-full px-4 py-2 font-semibold hover:!bg-medium-turquoise hover:!text-prussian-blue transition-colors duration-200 ease-in-out"
      class:bg-light-cyan={!scrolled}
      class:text-prussian-blue={!scrolled}
      class:bg-prussian-blue={scrolled}
      class:text-light-cyan={scrolled}
    >
      Acceder
    </button>
  {:else}
    <!-- Menu Desktop -->
    <div
      id="logo"
      class="rounded-full border-2 font-montserrat w-fit p-2 text-xl font-semibold"
      class:border-light-cyan={!scrolled}
      class:border-prussian-blue={scrolled}
    >
      LOGO
    </div>
    <nav
      id="navbar"
      class="font-roboto grid grid-cols-4 justify-between justify-items-center w-6/12 font-medium"
    >
      {#each menuItems as item}
        <a
          href={item.href}
          class="text-nowrap py-2 rounded-full hover:px-5 hover:bg-medium-turquoise hover:text-prussian-blue transition-all duration-200 ease-in-out"
        >
          {item.text}
        </a>
      {/each}
    </nav>
    <div
      id="button-group"
      class="flex items-center justify-center space-x-5 font-semibold"
    >
      <button
        id="access"
        class="rounded-full px-4 py-2 transition-colors duration-200 ease-in-out hover:!bg-medium-turquoise hover:!text-prussian-blue"
        class:bg-light-cyan={!scrolled}
        class:text-prussian-blue={!scrolled}
        class:bg-prussian-blue={scrolled}
        class:text-light-cyan={scrolled}
        class:hover\:bg-medium-turquoise={true}
        class:hover\:text-prussian-blue={true}
      >
        Acceder
      </button>
      <a
        id="contact-button"
        href="#contact"
        class="rounded-full border-2 bg-transparent px-4 py-2 hover:!bg-medium-turquoise hover:!text-prussian-blue hover:!border-medium-turquoise transition-colors duration-200 ease-in-out"
        class:border-light-cyan={!scrolled}
        class:border-prussian-blue={scrolled}
        class:hover\:bg-medium-turquoise={true}
        class:hover\:text-prussian-blue={true}
        class:hover\:border-medium-turquoise={true}
      >
        Contáctanos
      </a>
    </div>
  {/if}
</header>

{#if responsiveMenu}
  <!-- Menu Responsive desplegado -->
  <div
    class="h-screen w-full fixed inset-0 bg-black bg-opacity-80 z-50"
    transition:fade={{ duration: 200 }}
  >
    <div
      class="fixed left-0 h-screen w-full sm:w-96 bg-light-cyan text-prussian-blue flex flex-col"
      transition:fly={{
        x: -100,
        duration: 300,
        easing: (t) => --t * t * t + 1,
      }}
    >
      <div
        class="p-6 flex justify-between items-center border-b border-prussian-blue/20"
      >
        <div
          id="logo"
          class="rounded-full border-2 border-prussian-blue font-montserrat w-fit p-2 text-xl font-semibold"
        >
          LOGO
        </div>
        <button
          on:click={toggleResponsiveMenu}
          class="appearance-none text-prussian-blue hover:text-red-500 transition-colors duration-200 ease-in-out"
          aria-label="Cerrar menú"
        >
          <X size={24} />
        </button>
      </div>

      <nav class="flex-grow overflow-y-auto py-8">
        <ul
          class="text-lg flex flex-col items-center space-y-4 text-center w-full font-medium"
        >
          {#each menuItems as item}
            <li class="overflow-hidden">
              <a
                href={item.href}
                class="block py-2 text-nowrap rounded-full hover:px-5 hover:bg-medium-turquoise hover:text-prussian-blue transition-all duration-200 ease-in-out w-40"
                on:click={toggleResponsiveMenu}
                in:slide={{ axis: "x", delay: 300 }}
                out:fade={{ duration: 200 }}
              >
                {item.text}
              </a>
            </li>
          {/each}
          <li class="overflow-hidden">
            <a
              href="#contact"
              class="block py-2 text-nowrap rounded-full hover:px-5 hover:bg-medium-turquoise hover:text-prussian-blue transition-all duration-200 ease-in-out w-40"
              on:click={toggleResponsiveMenu}
              out:fade={{ duration: 200 }}
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
{/if}

<style lang="scss">
  header.scrolled {
    background-color: #dafffb;
    color: #04364a;
    #logo {
      border-color: #04364a;
    }
    #access {
      background-color: #04364a;
      color: #dafffb;
    }
    #contact-button {
      border-color: #04364a;
    }
  }
</style>
