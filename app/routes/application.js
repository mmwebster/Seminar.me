import Ember from "ember";
// Ember simple auth
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

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
