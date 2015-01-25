import Ember from "ember";

export default Ember.Route.extend({

  beforeModel: function() {
    console.log('application_route');
  },

  model: function() {
    return this.store.find('user');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('skills', this.store.find('skill'));
  }

});
