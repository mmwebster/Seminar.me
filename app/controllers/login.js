// app/controllers/login.js
import Ember from "ember";
// import torii from "torii";

// import { default as JSO } from 'jso';

export default Ember.ObjectController.extend({

  actions: {
    authenticate: function() {
      console.log('authenticating user');

      // authenticate with linkedin
      // var jso = new JSO({
      //   providerID: "google",
      //   client_id: "541950296471.apps.googleusercontent.com",
      //   redirect_uri: "http://bridge.uninett.no/jso/index.html",
      //   authorization: "https://accounts.google.com/o/oauth2/auth",
      //   scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
      // });
      // debugger
      // debugger

      // transition to search
      // ...
    }
  }

});
