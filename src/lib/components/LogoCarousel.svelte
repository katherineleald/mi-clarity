<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
  import "@splidejs/splide/dist/css/splide.min.css";

  // Create an array of 10 items for the logos
  const logos = Array(10).fill(null);
</script>

<div class="carousel-wrapper">
  <div class="gradient-overlay left" />
  <div class="gradient-overlay right" />
  <div class="w-full overflow-hidden">
    <Splide
      aria-label="Socios"
      class="w-full"
      options={{
        type: "loop",
        perPage: 8,
        perMove: 1,
        gap: "10px", // Reduced gap between slides
        pauseOnHover: true,
        resetProgress: false,
        arrows: false,
        pagination: false,
        focus: "center",
        isNavigation: false,
        updateOnMove: true,
        speed: 800,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        breakpoints: {
          640: {
            perPage: 3,
          },
          1024: {
            perPage: 5,
          },
        },
        autoScroll: {
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {#each logos as _, i}
        <SplideSlide class="w-fit">
          <div class="slide-content flex justify-center items-center w-fit">
            <div
              id="logo"
              class="rounded-full border-2 font-montserrat w-fit p-2 text-xl font-semibold border-prussian-blue text-prussian-blue"
            >
              LOGO
            </div>
          </div>
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</div>

<style lang="scss">
  .carousel-wrapper {
    position: relative;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15%;
    z-index: 2;
    pointer-events: none;
    @media (max-width: 650px) {
      display: none;
    }
  }

  .gradient-overlay.left {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }

  .gradient-overlay.right {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }

  :global(.splide__track) {
    overflow: visible;
  }
</style>
