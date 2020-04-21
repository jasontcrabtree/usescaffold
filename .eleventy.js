module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/script/');
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.addPassthroughCopy('json');
  eleventyConfig.addPassthroughCopy('md');

  eleventyConfig.addCollection('posts', (collection) => {
    return collection.getFilteredByGlob('src/posts/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site', //tutorial = dist
      includes: 'templates', // tutorial = templates
      data: '_data',
    },
    templateFormats: ['html', 'md', 'css'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passThroughFileCopy: true,
  };
};
