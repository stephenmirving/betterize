# betterize

_betterize_ is a more modern and opinionated CSS normalization file for better
cross-browser design and default styling in 2024.

Instead of CSS resets that will overwrite all the user-agent styles and require
you to add much of what was taken away back in yourself, CSS normalization seeks
to make your markup render consistently across browsers while maintaining modern
standards.

With [normalize.css](https://necolas.github.io/normalize.css/) remaining the
same for more than 6 years now, I began adding my own defaults that take
advantage of modern CSS, and removing old fixes that are no longer necessary.

## Versions in .css, .min.css, .sass, .scss, .less are available.

**This is *betterize* version 0.9.9 - Last update: 01/03/24**

**Betterize is still in active testing for what can be optimized, added, or removed**

### Deployment

To use *betterize*, simply download the repo and choose which version of the
file you will use from the style folder. This depends on which CSS preprocessor
you are using, or if you are using one at all. Of course, you can also simply
copy and paste from the file.

The next update (ver. 1.0.0) will allow for installing directly into your
project via NPM.

## Print Styles

I have also included a print file of default styles. I strongly recommend that
you take the contents of this file and append it to the very bottom of your
stylesheet in CSS. If you are using one of the CSS preprocessors (Sass, Less) then I
recommend using it in it's current form and importing it from your main file
that contains the imports for all the other partials.

In Less you would use the [less import at-rule](https://lesscss.org/features/#import-atrules-feature) like this: `@import 'vendor/print.less`

In Sass' .sass & .scss syntax you would import it with
[Sass' use at-rule](https://sass-lang.com/documentation/at-rules/use/) like this
`@use 'vendor/print'`. You could also do it with `@import 'vendor/print'`
but keep in mind that
[Sass' import at-rule](https://sass-lang.com/documentation/at-rules/import/) is
being phased out of Sass and will eventually be removed.

### Authors

Created by SM Irving <[@metric_dev](https://twitter.com/metric_dev)> containing
work and research done by [Nicolas Gallagher](https://github.com/necolas) and
[Sindre Sorhus](https://github.com/sindresorhus)
<[@sindresorhus](https://twitter.com/sindresorhus)>
