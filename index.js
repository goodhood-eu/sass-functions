const paths = [
  'replace',
  'image-size',
  'image-width',
  'image-height',
];

const modules = paths.reduce((acc, name) => ({ ...acc, [name]: require(`./${name}`) }), {});
const getFn = (options) => (
  paths.reduce((acc, name) => ({ ...acc, ...modules[name](options) }), {})
);

getFn.modules = modules;

module.exports = getFn;
