module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-sorting': {
      'properties-order': [
        'all',
        'content',
        'position',
        'inset',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',
        'vertical-align',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-wrap',
        'grid',
        'grid-area',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-gap',
        'grid-row-gap',
        'grid-column-gap',
        'gap',
        'row-gap',
        'column-gap',
        'align-items',
        'align-content',
        'justify-items',
        'justify-content',
        'align-self',
        'justify-self',
        'place-content',
        'place-items',
        'place-self',
        'order',
        'float',
        'clear',
        'object-fit',
        'object-position',
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-scrolling',
        'clip',

        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'aspect-ratio',
        'padding',
        'padding-inline',
        'padding-block',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-spacing',
        'border-collapse',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-top-image',
        'border-right-image',
        'border-bottom-image',
        'border-left-image',
        'border-corner-image',
        'border-top-left-image',
        'border-top-right-image',
        'border-bottom-right-image',
        'border-bottom-left-image',
        'margin',
        'margin-inline',
        'margin-block',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',

        'background',
        'background-color',
        'background-image',
        'background-attachment',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-clip',
        'background-origin',
        'background-size',
        'background-repeat',
        'image-rendering',
        'color',
        'box-decoration-break',
        'box-shadow',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
        'table-layout',
        'caption-side',
        'empty-cells',
        'list-style',
        'list-style-position',
        'list-style-type',
        'list-style-image',

        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'src',
        'line-height',
        'letter-spacing',
        'quotes',
        'counter-increment',
        'counter-reset',
        '-ms-writing-mode',
        'text-align',
        'text-align-last',
        'text-decoration',
        'text-emphasis',
        'text-emphasis-position',
        'text-emphasis-style',
        'text-emphasis-color',
        'text-indent',
        'text-justify',
        'text-outline',
        'text-transform',
        'text-wrap',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'text-shadow',
        'white-space',
        'word-spacing',
        'word-wrap',
        'word-break',
        'overflow-wrap',
        'tab-size',
        'hyphens',
        'interpolation-mode',

        'opacity',
        'visibility',
        'filter',
        'resize',
        'cursor',
        'pointer-events',
        'user-select',

        'unicode-bidi',
        'direction',
        'columns',
        'column-span',
        'column-width',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',
        'break-before',
        'break-inside',
        'break-after',
        'page-break-before',
        'page-break-inside',
        'page-break-after',
        'orphans',
        'widows',
        'zoom',
        'max-zoom',
        'min-zoom',
        'user-zoom',
        'orientation',
        'fill',
        'stroke',

        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',
        'transform',
        'transform-origin',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode'
      ],
      'unspecified-properties-position': 'bottom'
    }
  }
}
