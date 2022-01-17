const gravatarPlugin = require('eleventy-plugin-gravatar');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPlugin(gravatarPlugin);
     
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}