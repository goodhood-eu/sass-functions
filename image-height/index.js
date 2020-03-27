const imageSize = require('image-size');
const { getFilePath } = require('../utils');

const getFn = (options = {}) => ({
  'image-height($url)': (arg) => {
    const sass = options.sass || require('sass');
    const url = arg.getValue();

    const file = getFilePath(options, url);

    const { height } = imageSize(file);
    return new sass.types.Number(height, 'px');
  },
});

module.exports = getFn;
