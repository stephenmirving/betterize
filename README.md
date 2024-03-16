# betterize

_Betterize_ is a **modern** &amp; _opinionated_ CSS normalization file for better
foundational styling and cross-browser design in 2024 and beyond.

Instead of CSS resets that will overwrite all the user-agent styles and require
you to add much of what was taken away back in yourself, CSS normalization seeks
to make your markup render consistently across browsers while maintaining modern
standards.

With [normalize.css](https://necolas.github.io/normalize.css/) remaining
unchanged for more than 6 years now, it is now necessary to expand upon it.
To remove old fixes that are were no longer necessary and take
advantage of modern CSS properties. To provide broad cross-browser and legacy
support and improve the experience of developing stylesheets for the web.

## Table of Contents

- [Version](#version)
- [Deployment](#deployment)
- [Opinonated Design Choices](#opinonated-design-choices)
- [Print Styles](#print-styles)
- [Smoother](#smoother)
- [Authors](#authors)

## Version

**This is _betterize_ version 1.1.1 - Last update: 03/16/2024**

_Betterize_ is available in `.css`, `.min.css`, `.sass`, `.scss`, and `.less` versions.

## Deployment

To use _betterize_, simply download the repo and choose which version of the
file you will use from the style folder. This depends on which CSS preprocessor
you are using, or if you are using one at all. Of course, you can also simply
copy and paste from the file. It is recommended to put this file at the top of
your existing stylesheet, either manually or as part of your build process, so
as to minimie the number of HTTP requests made just for stylesheets.

The CSS version of _betterize_ has a minified version included for your convenience,
but you could also just add the `.css` file to your project and bundle and minify
everything together as a part of your build process.

The next update will allow for installing directly into your project via NPM.

## Opinonated Design Choices

There are many key design choices with _betterize_ that are very opinionated,
so if you are going to use betterize you should know what to look out for.

- On the universal selector, three properties are added, to be applied to all element:
  - The `box-sizing` property is changed from `content-box` by by using
    `inherit` here and then setting the `html` element  to `border-box`.
  - The `min-width` property is set to `0`. This can you a lot of time trying
    to figure out a ton of odd and unintuitive behavior, especially with flexbox,
    but it can also cause unexpected issues if you aren't aware it is here.
    If you encounter such an issue where you element is shrinking down to nothing,
    set a `min-width` for that element explicitly.
  - Set the `background-repeat` property `no-repeat`. If you have a background
    image that needs to repeat, set the `background-repeat` property for that
    element explicitly.
- On the `html` element, many modern CSS features are used:
  - The `color-scheme` property is set to `light dark`. If you are only
    using a single color scheme, you can overwrite this explicitly with
    `only light` or `only dark`. For accessibility and UX purposes,
    respecting user's native preferences for light/dark mode theming
    is recommended.
  - Uses `overflow: hidden scroll` with `scrollbar-gutter: stable` to
    ensure the page always has a vertical scrollbar visible, whether
    the page requires it or not. The `scrollbar-gutter` property works
    to reserve the space the scrollbar takes up in order to
    prevent unwanted layout changes as the content grows
    dynamically.
  - Sets `hanging-punctuation` to `first last` to make punctuation like
    quotation makes have better balance at the beginning and end of a line
    of text by allowing them to be placed outside the line box.
- In addition that, many other design choices were made:
  - _Betterize_ recommends to avoid the use of `margin-top`. Vertical margins
    collapse and often cause unexpected results. More importantly, a single
    direction of margin is an easier mental model. You should not set a
    `margin-top` or `margin-block-start` anyhere in the code, and should
    instead try to only use `margin-bottom` or `margin-block-end`.
  - The `<body>`  sets `font-family`, `line-height`, and `text-align`
    globally here. This is inherited later by other elements to prevent
    font inconsistencies.
  - A native font stack for optimum text rendering on every device and OS is set.
  - Improved `<hr>` default look which uses `currentcolor` for the color
    of the line.
  - Reset the list styles of al `<ol>` or `<ul>` elements inside a `nav` or `footer`

For more information about each specific choice, the _betterize_ files are heavily documented.

## Print Styles

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

## Smoother

If you are interested in a Sass/SCSS library of mixins and functions that aid in
front-end development, please consider checking out my project,
[smoother](https://github.com/stephenmirving/smthr).

Along with having more than 150 mixins and more than 80 functions, _Smoother_
has its own version of `_betterize.scss` that is reworked to be used exclusively
with the _Smoother_ library.

## Authors

Created by SM Irving <[@metric_dev](https://twitter.com/metric_dev)>.

Contains work and research done by
[Nicolas Gallagher](https://github.com/necolas) and
[Sindre Sorhus](https://github.com/sindresorhus)
<[@sindresorhus](https://twitter.com/sindresorhus)>
