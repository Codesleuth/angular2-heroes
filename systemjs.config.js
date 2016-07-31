(function (global) {
  var SystemJS = global.SystemJS;

  var map = {
    'app': 'app',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var angularPackages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
  ];

  angularPackages.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  SystemJS.config({
    baseURL: '/',
    map: map,
    packages: packages
  });
})(this);