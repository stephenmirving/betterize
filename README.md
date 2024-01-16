# betterize

_betterize_ is a more modern and opinionated CSS normalization file for better
default styling and cross-browser design in 2024.

Instead of CSS resets that will overwrite all the user-agent styles and require
you to add much of what was taken away back in yourself, CSS normalization seeks
to make your markup render consistently across browsers while maintaining modern standards.

With [normalize.css](https://necolas.github.io/normalize.css/) remaining
unchanged for more than 6 years now, I began creating my own normalization
defaults that take advantage of modern CSS, and removing old fixes that are were
no longer necessary.

### Available in .css, .min.css, .sass, .scss, .less versions.

**This is _betterize_ version 0.9.9 - Last update: 01/16/2024**

**Betterize is still in active testing for what can be optimized, added, or removed**

### Deployment

To use _betterize_, simply download the repo and choose which version of the
file you will use from the style folder. This depends on which CSS preprocessor
you are using, or if you are using one at all. Of course, you can also simply
copy and paste from the file.

The next update (ver. 1.0.0) will allow for installing directly into your
project via NPM.

### Print Styles

I have also included a file of default styles for printing.
I strongly recommend that you take the contents of this file and append it to
the very bottom of your stylesheet in CSS. This is because you want to minimize
the number of HTTP requests required to optimize loading times and this is the
easiest way to accomplish that. If you want to lazy load the print stylesheet
so it doesn't load until the user needs to print or after the page has already
finished loading, then you can do that as well.

If you are using one of the CSS preprocessors (Sass, Less) then I
recommend using it in it's current form and importing it from your main file
that contains the imports for all the other partials.

In Less you would use the
[less import at-rule](https://lesscss.org/features/#import-atrules-feature) like
this: `@import 'vendor/print'`

In Sass' .sass & .scss syntax you would import it with
[Sass' use at-rule](https://sass-lang.com/documentation/at-rules/use/) like this
`@use 'vendor/print'`. You could also do it with `@import 'vendor/print'`
but keep in mind that
[Sass' import at-rule](https://sass-lang.com/documentation/at-rules/import/) is
being phased out of Sass and will eventually be removed.

### Authors

Created by SM Irving <[@metric_dev](https://twitter.com/metric_dev)>.

Contains work and research done by
[Nicolas Gallagher](https://github.com/necolas) and
[Sindre Sorhus](https://github.com/sindresorhus)
<[@sindresorhus](https://twitter.com/sindresorhus)>
