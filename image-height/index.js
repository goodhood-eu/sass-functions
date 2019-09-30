const sass = require('node-sass');
const imageSize = require('image-size');

const getFn = (options = {}) => ({
  'image-height($url)': (arg) => {
    const url = arg.getValue();

    const root = options.publicRoot || __dirname;
    const file = `${root}/${url}`;

    const { height } = imageSize(file);
    return new sass.types.Number(height, 'px');
  },
});

module.exports = getFn;
