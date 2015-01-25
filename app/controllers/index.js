// app/controllers/application.js
import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ["application"],

  actions: {
    authenticationToggle: function() {
      this.get('controllers.application').authenticationToggle();
    }
  }
});
