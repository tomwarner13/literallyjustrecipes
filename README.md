There is nothing else on this website but recipes, and there never will be.

[https://tomwarner13.github.io/literallyjustrecipes/](https://tomwarner13.github.io/literallyjustrecipes/)

# Running Locally

- Clone the code.
- Clone the submodule for the `re-terminal` hugo theme.
- Install the `hugo-extended` package on your environment, using a version above 0.12something.0 (theme doesn't support below) and below 0.140.0 (140 and above will throw a warning-as-error when attempting to read the theme in which the complain about the existence of a deprecated function that does not actually exist in the theme's source code >:| )
- To view the site locally, run `hugo server --disable-fast-render` from the root directory; the site will be available on `localhost:1313`
- To add content locally, `hugo new content content/recipes/recipe.md` and then ideally just copy over an existing recipe from the same folder to use as a template and edit accordingly
- To view newly added content, check in the browser where it's running locally and it should have automatically updated. If it didn't restart the hugo server
