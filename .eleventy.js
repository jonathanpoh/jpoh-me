const gravatarPlugin = require('eleventy-plugin-gravatar');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPlugin(gravatarPlugin);
  eleventyConfig.addShortcode("currentYear", function() { currentYear = new Date().getFullYear(); return currentYear;})
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
