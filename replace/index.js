const getFn = (options = {}) => ({
  'replace($pattern, $string, $replacement)': (...args) => {
    const sass = options.sass || require('sass');
    // Sass will pass more than just the required arguments. Take only the expected ones.
    const [pattern, string, replacement] = args.slice(0, 3).map((arg) => arg.getValue());
    const result = string.replace(new RegExp(pattern, 'g'), replacement);
    return new sass.types.String(result);
  },
});

module.exports = getFn;
