// app/controllers/login.js
import Ember from "ember";
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  // authenticator: 'authenticator:simple-auth-oauth2'
  authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});