// app/controllers/application.js
import Ember from "ember";

export default Ember.ObjectController.extend({

  // properties
  authenticated: false,

  // actions
  actions: {
    authenticationToggle: function() {
      this.authenticationToggle();
    }
  },

  authenticationToggle: function() {
    if(!this.get('authenticated')) {
      // loggin in
      console.log('toggling authentication (ON)');
      this.set('authenticated', true);
      this.transitionToRoute('search');
    }else {
      //logging out
      console.log('toggling authentication (OFF)');
      this.set('authenticated', false);
      this.transitionToRoute('index');
    }
  }

});
