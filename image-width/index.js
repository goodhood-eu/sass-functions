const imageSize = require('image-size');

const getFn = (options = {}) => ({
  'image-width($url)': (arg) => {
    const sass = options.sass || require('sass');
    const url = arg.getValue();

    const root = options.publicRoot || __dirname;
    const file = `${root}/${url}`;

    const { width } = imageSize(file);
    return new sass.types.Number(width, 'px');
  },
});

module.exports = getFn;
