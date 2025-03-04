const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {
  // This makes the Eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will stop the default behaviour of foo.html files being turned into foo/index.html files
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // This will make Eleventy not use your .gitignore file to ignore files
  eleventyConfig.setUseGitIgnore(false);

  // This will copy these folders to the output without modifying them at all
  eleventyConfig.addPassthroughCopy("content/layout-generator/test");

  // This defines which files will be copied
  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  // Custom Filter
  eleventyConfig.addFilter("prepareImageUrl", function (str) {
    if (str.includes("://")) return str;
    return "../assets/img/links/websites/" + str;
  });
  eleventyConfig.addFilter("dateToRFC822Format", function (str) {
    // todo
    return str;
  });
  eleventyConfig.addFilter("recTurnToClasses", function (str) {
    if (!str) return "";
    return str.toLowerCase().replaceAll(" ", "").replaceAll(",", " ");
  });
  eleventyConfig.addFilter("recTurnToDecade", function (str) {
    if (!str) return "";
    const year = parseInt(str);
    if (year > 1980) {
      const decade = Math.floor(year / 10) * 10;
      return ("" + decade).replace("19", "") + "s";
    }

    if (year >= 1950) return "1950-79";
    if (year >= 1900) return "1900-49";
    return "1800s";
  });

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
      return minified;
    }
    return content;
  });

  // This defines the input and output directories
  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};
