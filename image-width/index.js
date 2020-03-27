const imageSize = require('image-size');
const { getFilePath } = require('../utils');

const getFn = (options = {}) => ({
  'image-width($url)': (arg) => {
    const sass = options.sass || require('sass');
    const url = arg.getValue();

    const file = getFilePath(options, url);

    const { width } = imageSize(file);
    return new sass.types.Number(width, 'px');
  },
});

module.exports = getFn;
