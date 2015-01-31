// app/models/user.js
import DS from "ember-data";

/******************
INFO: Every time a user imports their LinkedIn profile, Seminar.Me pulls all of the skills they have listed along with the endorsements
 	  they have received in them. This is combined with work experience to fill out a ranking of the user as best as possible. This 
 	  includes how long the user has worked (professionally) in the given fields.
******************/

var skill = DS.Model.extend({

	// Imported from LinkedIn
	name: DS.attr('string'),
  user: DS.hasMany('user'),
	endorsements: DS.attr('number')

});

skill.reopenClass({
  FIXTURES: [
    {id: "1", name: 'Entreprenuership'},
    {id: "2", name: 'Business Development'},
    {id: "3", name: 'Marketing'},
    {id: "4", name: 'Mobile Development'}
  ]
});

export default skill;