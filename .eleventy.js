module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    return {

        dir: {

            passthroughFileCopy: true,
            markdownTemplateEngine: "njk",
            templateFormats: ["html", "njk", "md"],
            input: "src",
            output: "_site",
            includes: "includes"
        }

    };

}