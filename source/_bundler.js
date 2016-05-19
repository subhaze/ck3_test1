var Builder = require('systemjs-builder');

var builder = new Builder('../', { defaultJSExtensions: true });

builder.buildStatic('build/main', '../build/bundle.js');