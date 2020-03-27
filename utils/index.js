const escapeStringRegexp = require('escape-string-regexp');

const REGEX_ABSOLUTE_PATH = /^\//;

const getFilePath = ({ alias, publicRoot }, url) => {
  if (REGEX_ABSOLUTE_PATH.test(url)) return `${publicRoot || __dirname}/${url}`;

  if (alias) {
    return Object.keys(alias).reduce((acc, key) => {
      const regex = new RegExp(`^${escapeStringRegexp(key)}`);
      return acc.replace(regex, alias[key]);
    }, url);
  }

  return url;
};

module.exports = { getFilePath };
