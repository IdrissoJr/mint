module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    // purge css
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: [`./public/**/*.html`, `./src/**/*.vue`],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
