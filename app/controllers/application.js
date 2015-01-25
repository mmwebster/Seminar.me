// app/controllers/application.js
import Ember from "ember";

export default Ember.ObjectController.extend({

  // properties
  authenticated: false,

  // actions
  actions: {
    authenticate: function() {
      this.athenticate();
    },
    unauthenticate: function() {
      this.unauthenticate();
    }
  },

  authenticate: function() {
    if(!this.get('authenticated')) {
      console.log('authenticating user');
      this.set('authenticated', true);
      this.transitionToRoute('search');
    }
  },
  unauthenticate: function() {
    if(this.get('authenticated')) {
      console.log('unauthenticating user');
      this.set('authenticated', false);
      this.transitionToRoute('index');
    }
  }

});
