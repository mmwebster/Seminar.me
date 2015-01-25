import Ember from "ember";

export default Ember.Route.extend({

  beforeModel: function() {
    console.log('application_route');
  },

  model: function() {
    return this.store.find('user');
  }

});
