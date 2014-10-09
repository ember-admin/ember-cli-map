/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

//    contentSecurityPolicy: {
//      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com " +
//        "mts0.googleapis.com maps.gstatic.com api-maps.yandex.ru",
//      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com",
//      'img-src': "'self' www.facebook.com p.typekit.net api-maps.yandex.ru maps.gstatic.com csi.gstatic.com maps.googleapis.com" +
//        "mts0.googleapis.com mts1.googleapis.com mts.googleapis.com https://mts0.googleapis.com https://maps.googleapis.com",
//      'font-src': 'fonts.gstatic.com'
//    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
