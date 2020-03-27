Sass functions
==============

A collection of javascript functions to extend functionality of [node-sass](https://github.com/sass/node-sass).

## Usage:

`npm install --save sass-functions`

then at your compilation step pass options like this:

```
{
  //...
  functions: {
    ...require('sass-functions/replace')(),
    //...
  },
  //...
}
```

### replace($pattern, $string, $replacement)
Adds a string replace function that takes a pattern (string or regular expression), a string to replace values in and what to use as the replacement (supports things like $1 for capture groups).

### image-size($url)
Generator takes a required `publicRoot` option that is used as a base path to look for all of the images. Returns a map with keys `width` and `height`.

Takes optional `alias` property to use along with webpack aliases to resolve paths to files

### image-width($url)
Same as `image-size` but only returns width

### image-height($url)
Same as `image-height` but only returns height


## [MIT License](LICENSE)
