const gravatarPlugin = require('eleventy-plugin-gravatar');

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy({ static: "/" });
  eleventyConfig.addPlugin(gravatarPlugin);
  eleventyConfig.addShortcode("currentYear", function() { const currentYear = new Date().getFullYear(); return currentYear; });
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
};
