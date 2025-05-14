// module.exports = {
//     plugins: [
//       require('tailwindcss'),          // Ensure you're using Tailwind CSS
//       require('@tailwindcss/postcss'), // Use the @tailwindcss/postcss plugin
//       require('autoprefixer'),         // Autoprefixer for handling vendor prefixes
//     ],
//   };
// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss'),          // Ensure you're using Tailwind CSS
    require('@tailwindcss/forms'),   // Tailwind CSS Forms plugin (if you're using it)
    require('autoprefixer'),         // Autoprefixer for handling vendor prefixes
  ],
};
