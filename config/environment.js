// config/environment.js
/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'seminars-me',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['simple-auth-oauth2'] = {
      // serverTokenEndpoint: 'http://localhost:4200/session'
      serverTokenEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization?response_type=https&client_id=757ll7ci1xd93u&scope=r_fullprofile&state=DCEEFWF45453sdffef000&redirect_uri=http://localhost:4200'
    };
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['*'],
      // crossOriginWhitelist: ['http://some.other.domain:1234'],
      // crossOriginWhitelist: ['https://www.linkedin.com'],
      // crossOriginWhitelist: ['http://localhost:4200'],
      store: 'simple-auth-session-store:local-storage'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
