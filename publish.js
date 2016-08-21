"use strict";

const cpr = require('cpr');

function cp(from, to) {
  return new Promise((resolve, reject) => {
    cpr(from, to, (err, files) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

Promise.all([
  cp('node_modules/core-js/client/shim.min.js', 'docs/vendor/core-js/client/shim.min.js'),
  cp('node_modules/zone.js/dist/zone.min.js', 'docs/vendor/zone.js/dist/zone.min.js'),
  cp('node_modules/reflect-metadata/Reflect.js', 'docs/vendor/reflect-metadata/Reflect.js'),
  cp('node_modules/systemjs/dist/system.js', 'docs/vendor/systemjs/dist/system.js'),
  cp('node_modules/@angular/', 'docs/vendor/@angular/'),
  cp('node_modules/rxjs/', 'docs/vendor/rxjs/'),
  cp('systemjs.config.js', 'docs/systemjs.config.js'),
  cp('index.html', 'docs/index.html'),
]).catch((err) => {
  console.log(err);
})