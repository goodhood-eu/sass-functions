const { resolve } = require('path');
const escapeStringRegexp = require('escape-string-regexp');

const REGEX_ABSOLUTE_PATH = /^\//;

const getFilePath = ({ alias, publicRoot }, url) => {
  if (REGEX_ABSOLUTE_PATH.test(url)) return resolve(`${publicRoot || __dirname}/${url}`);

  if (alias) {
    for (const key of Object.keys(alias)) {
      const regex = new RegExp(`^~${escapeStringRegexp(key)}(\\/|$)`);
      if (regex.test(url)) return resolve(url.replace(regex, `${alias[key]}$1`));
    }
  }

  return url;
};

module.exports = { getFilePath };
