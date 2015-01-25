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
    {id: 1, firstName: 'Jane', lastName: 'Doe', rating: '5', isSpeaker:true, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: [ 1 ] },
    {id: 2, firstName: 'John', lastName: 'Smith', rating: '4', isSpeaker:true, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: [ 2 ] },
    {id: 3, firstName: 'Bill', lastName: 'Smith', rating: '2', isSpeaker:false, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: [ 2 ] }
  ]
});

export default user;
