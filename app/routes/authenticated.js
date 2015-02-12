import Ember from "ember";
import $ from 'jquery';
export default Ember.Route.extend({

  needs: ['application'],

  setupController: function() {
    this.controllerFor('application').set('authenticated', true);

  },

  afterModel: function() {
    // parse auth code from url
    var query = this.queryString();

    // make api request to retrieve auth token
    $.ajax({
      type: 'GET',
      dataType: "json",
      url: "http://localhost:8080/",
      data: "authcode=" + query.code,
      success: function (responseData, textStatus, jqXHR) {
        // data contains json object returned from node api server
        var data = responseData;
        console.log('POST success.');
      },
      error: function (responseData, textStatus, errorThrown) {
          alert('There was an error while connecting to your account: ' + textStatus + ' :: ' + errorThrown);
      }
    });
  },

  queryString: function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
          // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = pair[1];
          // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
          // If third or later entry with this name
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    } 
    return query_string;
  }

});
