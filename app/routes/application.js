import Ember from "ember";
// import In from "in";
// Ember simple auth
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  beforeModel: function() {
    console.log('application_route');
    // link = new In({
    //   api_key: '757ll7ci1xd93u'
    // });
    // console.log(link);
  },

  model: function() {
    return this.store.find('user');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('skills', this.store.find('skill'));
  },

  actions: {
    authenticate: function(type) {
      console.log('about to authenticate');
      if (type === 'linkedin') {
        window.location.replace('https://www.linkedin.com/uas/oauth2/authorization?response_type=' + 'code' + '&client_id=' + '757ll7ci1xd93u' + '&scope=' + 'r_basicprofile%20r_emailaddress%20r_fullprofile%20r_network%20w_messages' + '&state=' + 'DCEEFWF45453sdffef420' + '&redirect_uri=' + 'http://localhost:4200/authenticated' + '');
      }else if (type === 'meetup') {
        console.log('singing in through meetup');
      }
    }
  }
  

});
