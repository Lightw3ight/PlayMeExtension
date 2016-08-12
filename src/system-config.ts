"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/now-playing-component',
  'app/now-playing',
  'app/now-playing/zone-selector',
  'app/shared/simple-track-list-item',
  'app/shared/queue-track-button',
  'app/shared/track-list-item',
  'app/shared/user-list',
  'app/shared/queued-track',
  'app/shared/search-bar',
  'app/album',
  'app/models',
  'app/api',
  'app/shared/breadcrumbs',
  'app/search',
  'app/search/artist-list-item',
  'app/search/album-list-item',
  'app/search/track-list-item',
  'app/artist',
  'app/queue',
  'app/history',
  'app/shared/opinion-buttons',
  'app/shared/tabset',
  'app/shared/tabset/tab',
  'app/shared/dropdown'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'moment': 'vendor/moment/moment.js'
    //'ng2-bootstrap': 'vendor/ng2-bootstrap'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
