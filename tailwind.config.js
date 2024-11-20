/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "prussian-blue": "#04364A",
        "blue-sapphire": "#176B87",
        "medium-turquoise": "#64CCC5",
        "light-cyan": "#DAFFFB",
      },
      listStyleImage: {
        check:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='white' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z'/%3E%3Cpath stroke-linecap='round' d='m16 24l6 6l12-12'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
