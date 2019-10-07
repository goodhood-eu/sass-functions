const getFn = (options = {}) => ({
  'replace($pattern, $string, $replacement)': (...args) => {
    const sass = options.sass || require('sass');
    const [pattern, string, replacement] = args.map((arg) => arg.getValue());
    const result = string.replace(new RegExp(pattern, 'g'), replacement);
    return new sass.types.String(result);
  },
});

module.exports = getFn;
