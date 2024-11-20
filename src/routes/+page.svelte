<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  /* Components */
  import Header from "$lib/components/Header.svelte";
  import Feature from "$lib/components/Feature.svelte";
  import AboutUsInfo from "$lib/components/AboutUsInfo.svelte";
  import ReviewsCarousel from "$lib/components/ReviewsCarousel.svelte";
  import LogoCarousel from "$lib/components/LogoCarousel.svelte";

  /* Data */
  import { featuresData } from "$lib/data/FeaturesData";
  import { aboutUsData } from "$lib/data/AboutUsData";
  import { servicesData } from "$lib/data/ServicesData";
  import Service from "$lib/components/Service.svelte";
  import ContactFormsTabs from "$lib/components/ContactFormsTabs.svelte";

  let headerHeight: number;

  onMount(() => {
    const header = document.querySelector("header");
    if (header) {
      headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  });

  function inview(node, params = {}) {
    const { once = false, threshold = 0 } = params;
    let observer;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.dispatchEvent(new CustomEvent("inview"));
          if (once) {
            observer.unobserve(node);
          }
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect, { threshold });
    observer.observe(node);

    return {
      destroy() {
        if (observer) {
          observer.unobserve(node);
        }
      },
    };
  }
</script>

<svelte:head>
  <style>
    :root {
      --header-height: 5rem; /* Default value, will be updated in onMount */
    }
    html {
      scroll-padding-top: var(--header-height);
    }
    body {
      padding-top: var(--header-height);
    }
    #home {
      margin-top: calc(-1 * var(--header-height));
    }
  </style>
</svelte:head>

<div class="w-full min-h-screen bg-[#F6F6F6] flex flex-col">
  <Header />

  <!-- Inicio -->
  <div id="home" class="h-screen flex flex-col">
    <div
      id="banner"
      class="relative flex-grow bg-[url('/img/banner.png')] bg-no-repeat bg-cover bg-center"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-prussian-blue from-50% to-transparent to-100% opacity-75"
      ></div>
      <div
        class="relative h-full flex items-center justify-center flex-col z-10 px-4 md:px-8"
      >
        <div
          class="space-y-5 flex items-center justify-center flex-col"
          use:inview={{ once: true }}
          on:inview={(e) => {
            e.target.style.visibility = "visible";
            e.target.animate(
              [
                { opacity: 0, transform: "translateY(50px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 1000,
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                fill: "forwards",
              }
            );
          }}
          style="visibility: hidden;"
        >
          <h1
            class="uppercase text-center text-white font-montserrat text-2xl md:text-4xl font-bold w-full lg:w-7/12"
          >
            Más que un software, un aliado para tu crecimiento
          </h1>
          <p
            class="font-roboto text-white text-center w-full lg:w-7/12 text-sm md:text-lg"
          >
            Clarity representa el desarrollo continuo de soluciones de gestion
            de rapida adaptacion a las necesidades que permiten el crecimiento
            para su negocio
          </p>
          <div
            id="button-group"
            class="flex items-center justify-center space-y-3 md:space-y-0 md:space-x-5 font-semibold flex-col md:flex-row"
          >
            <button
              id="access"
              class="rounded-full bg-medium-turquoise text-prussian-blue hover:bg-blue-sapphire hover:text-light-cyan transition-colors duration-200 ease-in-out px-8 py-3 text-xl lg:text-2xl"
              >Descubre más</button
            >
            <button
              id="contact-button"
              class="rounded-full border-2 border-white text-white bg-transparent px-8 py-3 text-xl lg:text-2xl hover:bg-light-cyan hover:text-prussian-blue transition-colors duration-200 ease-in-out"
              >Contáctanos</button
            >
          </div>
        </div>
      </div>
    </div>

    <div id="features" class="w-full pt-8 px-4 md:px-8">
      <div
        class="flex items-start lg:items-center justify-evenly flex-col md:flex-row space-y-5 md:space-y-0"
        use:inview={{ once: true }}
        on:inview={(e) => {
          e.target.style.visibility = "visible";
          e.target.animate(
            [
              { opacity: 0, transform: "translateY(50px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 1000,
              easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              fill: "forwards",
            }
          );
        }}
        style="visibility: hidden;"
      >
        {#each featuresData as feature}<Feature
            iconName={feature.icon}
            featureTextBold={feature.textBold}
            featureTextBase={feature.textBase}
          />
        {/each}
      </div>
    </div>
  </div>

  <!-- ¿Quiénes somos? -->
  <div
    id="about-us"
    class="mt-5 pt-8 flex flex-col items-center justify-center"
  >
    <div
      class="w-fit flex flex-col items-center justify-center space-y-2"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <h1
        class="uppercase text-3xl font-bold text-blue-sapphire font-montserrat"
      >
        ¿Quiénes somos?
      </h1>
      <hr class="h-1 bg-medium-turquoise w-20" />
    </div>
    <div id="about-us-content" class="w-full pt-8 px-4 md:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
        use:inview={{ once: true }}
        on:inview={(e) => {
          e.target.style.visibility = "visible";
          e.target.animate(
            [
              { opacity: 0, transform: "translateY(50px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 1000,
              easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              fill: "forwards",
            }
          );
        }}
        style="visibility: hidden;"
      >
        {#each aboutUsData as aboutUs}
          <AboutUsInfo
            bgImage={aboutUs.bgImage}
            title={aboutUs.title}
            content={aboutUs.content}
            isHtml={aboutUs.isHtml}
          />
        {/each}
      </div>
    </div>
  </div>

  <!-- Clientes -->
  <div
    id="clients"
    class="mt-5 pt-8 flex flex-col items-center justify-center space-y-7"
  >
    <div
      class="w-fit flex flex-col items-center justify-center space-y-2"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <h1
        class="uppercase text-3xl font-bold text-blue-sapphire font-montserrat"
      >
        Clientes
      </h1>
      <hr class="h-1 bg-medium-turquoise w-20" />
    </div>
    <div
      class="overflow-hidden w-full flex flex-col items-center justify-center space-y-7"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <p
        class="text-prussian-blue text-sm md:text-base text-center w-full px-4 lg:px-0 lg:w-5/12"
      >
        Más de 100 clientes han confiado en Mi Clarity para optimizar sus
        procesos y aumentar sus ventas. Descubre por qué nos recomiendan:
      </p>
      <ReviewsCarousel />
    </div>
    <div
      class="overflow-hidden w-full flex flex-col items-center justify-center space-y-7"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <p
        class="text-prussian-blue text-sm md:text-base text-center w-full px-4 lg:px-0 lg:w-5/12 pt-3"
      >
        Empresas de diversos sectores han confiado en Mi Clarity para alcanzar
        sus objetivos. ¡Conoce a nuestros socios estratégicos y únete a esta
        comunidad de éxito!
      </p>
      <LogoCarousel />
    </div>
  </div>

  <!-- Servicios -->
  <div
    id="services"
    class="mt-5 pt-8 flex flex-col items-center justify-center space-y-7"
  >
    <div
      class="w-fit flex flex-col items-center justify-center space-y-2"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <h1
        class="uppercase text-3xl font-bold text-blue-sapphire font-montserrat"
      >
        Servicios
      </h1>
      <hr class="h-1 bg-medium-turquoise w-20" />
    </div>
    <div
      class="flex items-start px-8 lg:items-center justify-evenly flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-2"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate(
          [
            { opacity: 0, transform: "translateY(50px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 1000,
            easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            fill: "forwards",
          }
        );
      }}
      style="visibility: hidden;"
    >
      {#each servicesData as service}<Service
          iconName={service.icon}
          serviceTitle={service.serviceTitle}
          serviceDescription={service.serviceDescription}
        />
      {/each}
    </div>
  </div>

  <!-- Contactanos -->
  <div
    id="contact"
    class="mt-5 pt-8 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center space-y-7 md:space-y-0 h-full"
  >
    <div
      class="w-full md:w-1/3 flex flex-col items-center justify-between h-full"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <div
        class="w-full flex flex-col items-center justify-center space-y-2 mb-6"
      >
        <h1
          class="uppercase text-3xl font-bold text-blue-sapphire font-montserrat"
        >
          Contáctanos
        </h1>
        <hr class="h-1 bg-medium-turquoise w-20" />
      </div>
      <p class="text-prussian-blue text-center mb-6">
        Estamos aquí para ayudarte. Ya sea que necesites información o soporte,
        nuestro equipo está listo para asistirte.
      </p>
      <ul class="space-y-4 text-prussian-blue text-lg flex-grow">
        <li class="flex items-center">
          <Icon
            icon="ic:round-check"
            class="w-6 h-6 text-medium-turquoise mr-2 flex-shrink-0"
          />
          <span>Respuesta rápida garantizada</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="ic:round-check"
            class="w-6 h-6 text-medium-turquoise mr-2 flex-shrink-0"
          />
          <span>Equipo de expertos a tu disposición</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="ic:round-check"
            class="w-6 h-6 text-medium-turquoise mr-2 flex-shrink-0"
          />
          <span>Soluciones personalizadas para tu negocio</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="ic:round-check"
            class="w-6 h-6 text-medium-turquoise mr-2 flex-shrink-0"
          />
          <span>Soporte 24/7 para clientes premium</span>
        </li>
      </ul>
    </div>
    <div
      class="w-full md:w-2/3 md:px-5 h-full"
      use:inview={{ once: true }}
      on:inview={(e) => {
        e.target.style.visibility = "visible";
        e.target.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 2000,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "forwards",
        });
      }}
      style="visibility: hidden;"
    >
      <ContactFormsTabs />
    </div>
  </div>

  <!-- Footer -->
  <div class="mt-12 w-full py-2 bg-prussian-blue">
    <p
      class="text-center text-xs md:text-sm text-white flex items-center justify-center space-x-1"
    >
      <Icon icon="solar:copyright-outline" />
      <span class="font-montserrat font-semibold">Mi Clarity 2024.</span>
      Todos los derechos reservados
    </p>
  </div>
</div>
