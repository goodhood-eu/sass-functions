const paths = [
  'replace',
  'image-size',
  'image-width',
  'image-height',
];

const modules = paths.reduce((acc, name) => ({ ...acc, [name]: require(`./${name}`) }), {});
const getFn = (options) => Object.keys(modules).map((name) => modules[name](options));

getFn.modules = modules;

module.exports = getFn;
