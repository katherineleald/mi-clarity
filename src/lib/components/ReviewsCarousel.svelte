<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  import Review from "./Review.svelte";

  const reviews = [
    { quote: "Excelente servicio", author: "María" },
    { quote: "Muy recomendable", author: "Juan" },
    { quote: "Superó mis expectativas", author: "Ana" },
    { quote: "Increíble experiencia", author: "Carlos" },
    { quote: "Volveré sin duda", author: "Laura" },
    { quote: "Lo mejor que he probado", author: "Pedro" },
  ];
</script>

<div class="carousel-wrapper">
  <div class="gradient-overlay left" />
  <div class="gradient-overlay right" />

  <div class="carousel-container">
    <Splide
      aria-label="Opiniones de clientes"
      class="h-48"
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "2em",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        resetProgress: false,
        arrows: true,
        pagination: true,
        focus: "center",
        isNavigation: true,
        updateOnMove: true,
        speed: 800,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }}
    >
      {#each reviews as { quote, author }}
        <SplideSlide>
          <div class="slide-content">
            <Review {quote} {author} />
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

  .carousel-container {
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    position: relative;
  }

  .slide-content {
    padding: 1rem 0;
  }

  :global(.splide__arrow) {
    background: #8bb5c3;
    opacity: 1;
    width: 2em;
    height: 2em;
    z-index: 5;
    @media (max-width: 650px) {
      display: none;
    }
  }

  :global(.splide__arrow svg) {
    fill: #176b87 !important;
    width: 1em;
    height: 1em;
    @media (max-width: 650px) {
      display: none;
    }
  }

  :global(.splide__pagination) {
    bottom: 0;
  }

  :global(.splide__pagination__page) {
    background: #8bb5c3;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  :global(.splide__pagination__page.is-active) {
    background: #176b87;
    transform: scale(1.2);
    opacity: 1;
  }

  :global(.splide__slide) {
    border: none !important;
  }

  :global(.splide__slide.is-active) {
    z-index: 1;
    border: none !important;
  }
</style>
