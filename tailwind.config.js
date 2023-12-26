/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
};
