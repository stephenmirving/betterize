const { convert } = require('@ruslanuz/sass-convert');

// Convert index.scss file from scss to sass

convert('./style/_betterize.scss', { syntax: 'sass' });
