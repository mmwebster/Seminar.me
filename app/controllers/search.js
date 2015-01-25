// app/controllers/application.js
import Ember from "ember";

export default Ember.ObjectController.extend({

  // Properties
  selectedSkill: 'Select a skill',
  skills: ["Select a skill", "Entrepreneurship", "Marketing", "Mobile Development", "Business Development"],
  skillSelected: false,


  // Observers
  monitor: function() {
    console.log(this.get('selectedSkill'));

    // Selection has now been made.
    if(!this.get('skillSelected')) {
      this.set('skillSelected', true);
      $( "body" ).animate({
        scrollTop: "+=350"
      }, 600, function() {
        console.log('finished scrolling')
      });
    }

    // Logic for first or new selection.

  }.observes('selectedSkill')
});
