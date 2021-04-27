const paths = [
  'replace',
  'image-size',
];

const modules = paths.reduce((acc, name) => ({ ...acc, [name]: require(`./${name}`) }), {});
const getFn = (options) => (
  paths.reduce((acc, name) => ({ ...acc, ...modules[name](options) }), {})
);

getFn.modules = modules;

module.exports = getFn;
