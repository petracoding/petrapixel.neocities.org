module.exports = function (eleventyConfig) {
  // This makes the Eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will stop the default behaviour of foo.html files being turned into foo/index.html files
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // This will make Eleventy not use your .gitignore file to ignore files
  eleventyConfig.setUseGitIgnore(false);

  // This will copy these folders to the output without modifying them at all
  //   eleventyConfig.addPassthroughCopy("content/assets");

  // This defines which files will be copied
  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  // This defines the input and output directories
  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};
