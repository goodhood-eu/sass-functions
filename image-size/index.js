const imageSize = require('image-size');

const getFn = (options = {}) => ({
  'image-size($url)': (arg) => {
    const sass = options.sass || require('sass');
    const url = arg.getValue();

    const root = options.publicRoot || __dirname;
    const file = `${root}/${url}`;

    const dimensions = imageSize(file);
    const keys = ['width', 'height'];

    const map = new sass.types.Map(keys.length);
    keys.forEach((key, index) => {
      map.setKey(index, new sass.types.String(key));
      map.setValue(index, new sass.types.Number(dimensions[key], 'px'));
    });

    return map;
  },
});

module.exports = getFn;
