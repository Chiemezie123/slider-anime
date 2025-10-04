// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ correct way
    autoprefixer: {}, // optional but usually added
  },
};
