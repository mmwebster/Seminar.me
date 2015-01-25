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
      // move to search with dummy data
      this.transitionTo('search');
    }
  }

});
