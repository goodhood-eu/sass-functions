const modules = [
  'replace',
  'image-size',
  'image-width',
  'image-height',
];

module.exports = modules.reduce((acc, name) => ({ ...acc, [name]: require(`./${name}`) }), {});
