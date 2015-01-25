import Ember from "ember";
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
// import session from "simple-auth/session";
// import ENV from 'config/environment.js';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    console.log('application_route');
  },

  actions: {
    authenticateSession: function(provider) {
      this.get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: provider
      }, function(error) {
        alert('There was an error when trying to sign you in: ' + error);
      });
    },


    sessionAuthenticationSucceeded: function() {
      this.transitionTo('search');
    }
  }

});
