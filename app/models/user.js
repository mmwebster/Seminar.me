// app/models/user.js
import DS from "ember-data";

var user = DS.Model.extend({

  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  rating: DS.attr('number'),
  isSpeaker: DS.attr('boolean'),
  bio: DS.attr('string'),
  skills: DS.hasMany('skill', {async: true}),

});

user.reopenClass({
  FIXTURES: [
    {id: 1, firstName: 'John', lastName: 'Smith', rating: '5', isSpeaker:true, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: [1,2,3] }
  ]
});

export default user;
