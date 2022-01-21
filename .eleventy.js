const gravatarPlugin = require('eleventy-plugin-gravatar');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('./src/browserconfig.xml');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/*.png');
  eleventyConfig.addPassthroughCopy('./src/*.svg');
  eleventyConfig.addPlugin(gravatarPlugin);
  eleventyConfig.addShortcode("currentYear", function() { currentYear = new Date().getFullYear(); return currentYear;})
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
