Package.describe({
  name: 'aessig:smooch',
  version: '0.0.5',

  // Brief, one-line summary of the package.
  summary: 'Latest version Smooch loaded via CDN',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aessig/meteor-smooch-cdn.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.1');

  api.addFiles('load.js', 'client');
});
