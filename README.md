# betterize

_Betterize_ is a **modern** and _opinionated_ CSS normalization file for better
foundational styling and cross-browser design in 2024 and beyond.

Instead of CSS resets that will overwrite all the user-agent styles and require
you to add much of what was taken away back in yourself, CSS normalization seeks
to make your markup render consistently across browsers while maintaining modern
standards.

With [normalize.css](https://necolas.github.io/normalize.css/) remaining
unchanged for more than 6 years now, it is now necessary to expand upon it.
To remove old fixes that are no longer necessary and take
advantage of modern CSS properties. To provide broad cross-browser and legacy
support and improve the experience of developing stylesheets for the web.

## Table of Contents

1. [Version](#version)
2. [Deployment](#deployment)
3. [Opinionated Design Choices](#opinionated-design-choices)
4. [Betterize Vs. Betterize-Slim](#betterize-vs-betterize-slim)
5. [Recent Updates](#recent-updates)
6. [Print Styles](#print-styles)
7. [Contributions](#contributions)
8. [License](#license)
9. [Questions](#questions)
10. [Smoother](#smoother)
11. [Authors](#authors)

## Version

**This is _betterize_ version 2.0.8 - Last updated: 03/30/2024**

_Betterize_ is available in `.css`, `.min.css`, `.sass`, `.scss`, and `.less` versions.

There is also a print stylesheet available in all of these file types as well.
See: [Print Styles](#print-styles).

The file size of betterize.min.css is 11.61kB and is 3.6kB minified and Gzipped.

The file size of betterize-slim.min.css is 9.29kB and is 3.22kB minified and Gzipped.

## Deployment

_Betterize is now available on NPM! To install using NPM, simply run:

```bash
npm i -D betterize
```

You can see _Betterize_ on the NPM website here:
[https://www.npmjs.com/package/betterize](https://www.npmjs.com/package/betterize)

Alternately, you can use _Betterize_ by simply downloading [the _Betterize_ repo](https://github.com/stephenmirving/betterize).

After using either method, you will need to choose which version of the file you
will use. This depends on which CSS preprocessor you are using, or if you are
using one at all. _Betterize_ is included as a CSS file and a minified CSS file,
but there are also versions for CSS preprocessors [Less](https://lesscss.org/)
and [Sass](https://sass-lang.com/) (both `.sass` and `.scss` syntax available).

Next decide if you want to use betterize or betterize-slim. While betterize
attempts to offer maximum browser and device compatibility, from bleeding-edge
to legacy, betterize-slim attempts to trim the fat by removing all styles and
bug fixes that only benefit very old browsers, such as those that only target
Internet Explorer.

Choose the file version and type you want and either copy it from the
`node_modules/betterize` folder, or the downloaded repo folder, and paste it
into your project. You could also have your build process pull it directly from
the `node_modules` folder.

Of course, you can also simply copy and paste from the files in the repo itself.

To copy all of the files from the pacackage out of the `node_modules` folder and
into your project's style directory, you can use the following CLI command in bash.
Change the path to wherever you want to move the file in your own project.

```bash
cp -r node_modules/betterize your/path-to/sass/vendors/
```

To copy just your chosen _Betterize_ and print file type project folder into your own style directory, you can use the following bash command:

```bash
cp node_modules/betterize/{_betterize-slim.scss,_print.scss} www/sass/vendors
```

It is recommended to put this file at the top of your existing stylesheet,
either manually or as part of your build process, and not to link to it on its
own, so as to minimize the number of HTTP requests made just for stylesheets.

The CSS version of _betterize_ has a minified version included for your
convenience, but you could also just add the `.css` file to your project and
bundle and minify everything together as a part of your build process.

## Opinionated Design Choices

There are many key design choices with _betterize_ that are very opinionated,
so if you are going to use betterize you should know what to look out for.

- On the universal selector, three properties are added, to be applied to all element:
  - The `box-sizing` property is changed from `content-box` by by using
    `inherit` here and then setting the `html` element to `border-box`.
  - The `min-width` property is set to `0`. This can save you a lot of time trying
    to figure out a ton of odd and unintuitive behavior, especially with flexbox,
    but it can also cause unexpected issues if you aren't aware it is here.
    If you encounter such an issue where your element is shrinking down to nothing,
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
    quotation marks have better balance at the beginning and end of a line
    of text by allowing them to be placed outside the line box.
- A default font stack that works across all browsers and devices is also added
  to the `<html>` element. This ensures consistent inheritance and allows you to
  set custom fonts on the `<body>` with a guaranteed fall back in case your font
  takes a long time to load or doesn't load at all.
- In addition, a few other design choices were made that you should be aware of:
  - _Betterize_ recommends to avoid the use of `margin-top`. Vertical margins
    collapse and often cause unexpected results. More importantly, a single
    direction of margin is an easier mental model. You should not set a
    `margin-top` or `margin-block-start` anywhere in the code, and should
    instead try to only use `margin-bottom` or `margin-block-end`.
  - The `<body>` sets `line-height: 1.5`, and `text-align:left`. This is
    inherited later by other elements to prevent font inconsistencies.
  - Improved `<hr>` default look which uses `currentColor` for the color
    of the line. For a more standard `<hr>` look, use the class `hr-light` on
    your `<hr>` elements.

For more information about each specific choice, you can read the _betterize_
files themselves, as they are heavily documented.

## Betterize Vs. Betterize-Slim

After version 2.0.0, _Betterize_ split into two major versions, `betterize` and
`betterize-slim`, each with 5 possible file extension types that provide
versions for the Sass and Less preprocessors, and a minified CSS file. (`.css`
`.min.css`, `.sass`, `.scss`, and `.less`).

While `betterize` has a design philosophy of offering the maximum browser and
device compatibility possible, from legacy to the bleeding-edge,
`betterize-slim` attempts to trim the fat by removing all styles and bug fixes
that only benefit very old browsers or devices, such as those that only target
Internet Explorer or Safari on iOS 5.1-. It also has a reduced numbers of fixes
and styling that targets legacy Edge (18-) or versions of "Evergreen"
PC browsers which are more than a few years old, such as Chrome 64-.

If you need to support as many browsers and devices that you can, choose
`betterize`. If you don't need to worry about very old devices and browsers,
and in particular if you don't need to support IE, feel free to choose
`betterize-slim` to save some bytes in your file size.

## Recent Updates

### Upcoming Changes

- Custom configurarability for the betterize versions written for CSS
  preprocessors Sass (`.scss`/`.sass`) and Less (`.less`).
- An install script that lets you choose the type and file extensions you want
  and copies those files into your project's style folder.

### Version 2.0.1 - 2.0.8 Patch Notes

- Fixed some mistakes related to `pre` and `code` styles
- Removed more legacy browser code from betterize-slim files and shorted some
  selectors.
- Moved around the order of some rule sets to be more logically grouped.
- Added additional comments
- Fixed a bad typo introduced into the `body` selectors comments.
- Improved the README

### Version 2.0.0 Patch Notes

- Split _Betterize_ into two version. The original betterize file will remain
  the same, and continue to normalize and improve designing for the widest range
  of browsers and devices possible. A new version, which is called
  betterize-slim, is a slimmed down version of _Betterize_ that only targets a
  more limited and modern set of browser versions and devices. For example, it
  will not include any styling which is only of benefit to Internet Explorer,
  legacy Edge (18-) or versions of "Evergreen" browsers such as Chrome 64- which
  are more than a few years old.
- Fixed the logical properties in all versions of _Betterize_ such that when
  writing style changes for different languages, the logical properties correctly
  overwrite all of the physical properties.

### Version 1.4.1 Patch Notes

- Changed the regular `::placeholder` selector to have the same properties as
  the vendor-prefixed versions of the selector.

### Version 1.4.0 Patch Notes

- Completely removed the opinionated `:focus-visible` and `:-moz-focusring`
  styles due to their ugly effect on form elements. Will be added back in a
  more limited way in a future version.
- Modified the margin properties on the `dd` selector to use the shorthand
  `margin` property instead of setting `margin-bottom` and `margin-left`
  separately.
- Changed instances of `-webkit-fit-content` to the correct legacy WebKit,
  non-standard form of `fit-content`: `-webkit-intrinsic`.
- Removed explicitly set border override with `WindowFrame` color from
  declaration with `button`, `input`, `select`, and `text-area` selectors.

### Version 1.3.5 Patch Notes

- Fixed the opinionated `<hr>` styling to look more subtle. The `.hr-light`
  class is still available to overwrite it.
- Updated the `.sr-only` / `.visually-hidden` classes to remove an unnecessary
  declaration.

### Version 1.3.4 Patch Notes

- Changed all logical shorthand properties to their longhand forms
  for broader compatibility.

### Version 1.3.1 - 1.3.3 Patch Notes

- Removed the semicolon after the charset declaration in `_betterize.sass`
- Added `:not(.hr-light)` to the `hr` selector so using `.hr-light` would not
  maintain any of the opinionated choices for the `<hr>` element.
- Removed the redundant `::-moz-placeholder` selector due to already using
  `:-moz-placeholder` to support Firefox 18- as well.

### Version 1.3.0 Patch Notes

- As the above section states, the next version of _Betterize_ will be splitting
  into two versions, one that targets as many browsers and devices as possible,
  and one that focuses on targeting modern browsers. In preparation of that,
  this version of _Betterize_ added broad backwards support for legacy browsers
  and devices.
- In preparation of splitting betterize into two versions, and for maximum
  compatibility, colors that were in `rgb()` or `hsl()` notation were converted
  to hex notation where appropriate.
- In preparation of splitting betterize into two versions, and for maximum
  compatibility, removed the double colon notation used for the first group of
  psuedo-elements like `::before` and ``::after` and instead switched to using
  `:before` and `:after`.
- In preparation of splitting betterize into two versions, and for maximum
  compatibility, added fallbacks for `rem` unit values.
- Added more logical properties, leaving their physical property fallbacks
  (ex. `padding-block` and `padding-inline` below normal `padding` properties).
- In preparation of splitting betterize into two versions, and for maximum
  compatibility, added vendor prefixes to some properties.
- A default of `background-color: #fff` and `color: #212529` was added
  to the `body` selector. A very faint background gradient was also added.
- Dark mode color and background-color added to the `body` selector.
- Now using a media query to change the default `line-height` on the `body` from
  1.5 to 1.4 when the user has a device viewport with low width or height.
- Undo the styles for placeholder links/named anchors (without href)
  which have not been made explicitly keyboard-focusable (without tabindex).
- Added an SVG arrow indicator to the `select` element.
- Reset `padding` and `border-width` to 0 for `[type='color']` and `[type='range']`
- Turned of animations and transitions for prefers-reduce-motion with universal
  selector and `!important`.
- Added Linux fonts to the default font stack on the `html` element.
- Fixed inputs of type `range` do not have `touch-action: manipulation` applied.
- Added `@charset "UTF-8";` to the top of the file.
- Added an opinionated default styling of `<kbd>` text elements that makes them
  look more like keyboard buttons.
- Changed `image-rendering: smooth` on `<img>` elements to only be applied if
  the image has a file extension indicating it is likely to be a photo,
  .jpg, .jpeg, .webp, .avif, .jp2, or .jxr.
- Added `image-rendering: crisp-edges` to `<img>` elements with .svg file extensions.
- Finished fleshing out the print stylesheet.

## Print Styles

I have also included a file of default styles for printing.
I recommend that you take the contents of this file and append it to
the very bottom of your stylesheet in CSS. This is because you want to minimize
the number of HTTP requests required to optimize loading times and this is the
easiest way to accomplish that. If you want to lazy load the print stylesheet
so it doesn't load until the user needs to print or after the page has already
finished loading, then you can do that as well.

The file size of `print.min.css` is 1.32 kB and is 656 Bytes minified and Gzipped.

If you are using one of the CSS preprocessors (Sass or Less) then I recommend
using `_print.sass`, `_print.scss`, and `_print.less` in their current form and
importing the file from your main file that contains the imports for all the
other partials.

In Less you would use the
[less import at-rule](https://lesscss.org/features/#import-atrules-feature) like
this: `@import 'vendor/print'`

In Sass' .sass & .scss syntax you would import it with
[Sass' use at-rule](https://sass-lang.com/documentation/at-rules/use/) like this
`@use 'vendor/print'`. You could also do it with `@import 'vendor/print'`
but keep in mind that
[Sass' import at-rule](https://sass-lang.com/documentation/at-rules/import/) is
being phased out of Sass and will eventually be removed.

For more information about migrating away from the soon-to-be-deprecated
`@import` and using the newer `@forward` and `@use` directives, see the offical
[Sass documentation](https://sass-lang.com/documentation/) for:

- [@forward](https://sass-lang.com/documentation/at-rules/forward/)
- [@use](https://sass-lang.com/documentation/at-rules/use/)
- [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator/)

## Questions

If you have any questions about how to use _Betterize_ that cannot be answered
by this README or the documentation in the file, or if you have any issues,
suggestions or comments, I would be happy to help anyone
who reaches out. You can find me on X/Twitter at
[@metric_dev](https://twitter.com/metric_dev).

Feel free to ask me anything you like in a tweet, or shoot me a DM (though if
you are not verified on X/Twitter I may not see the DM).

## Smoother

If you are interested in a Sass/SCSS library of mixins and functions that aid in
front-end development, please consider checking out my project,
[smoother](https://github.com/stephenmirving/smthr).

Along with having more than 150 mixins and more than 80 functions, _Smoother_
has its own version of `_betterize.scss` that is reworked to be used exclusively
with the _Smoother_ library.

You can install _Smoother_ in NPM like this:

```bash
npm i -D smoother
```

## Contributions

If you would like to contribute to _Betterize_, whether it is to add something
new or fix a bug you have found, check out the
[Contributions](https://github.com/stephenmirving/betterize/blob/master/CONTRIBUTIONS.md)
document.

## License

_Betterize_ is distributed under an
[MIT License](https://github.com/stephenmirving/betterize/blob/master/LICENSE).

**TL;DR:** Anyone can use this code however they want but it would sure be nice
if they also included a copy of the above license.

## Authors

Created by SM Irving <[@metric_dev](https://twitter.com/metric_dev)>.

New contributors are welcome!

Contains work and research done by:

- [Nicolas Gallagher](https://github.com/necolas)
- [Sindre Sorhus](https://github.com/sindresorhus) <[@sindresorhus](https://twitter.com/sindresorhus)>
