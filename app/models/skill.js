// app/models/user.js
import DS from "ember-data";

var skill = DS.Model.extend({

  name: DS.attr('string'),
  rank: DS.attr('number'),
  users: DS.hasMany('user', {async: true})

});

skill.reopenClass({
  FIXTURES: [
    {id: "1", name: 'Entreprenuership', rank: 1, users: ["1", "2", "3"]},
    {id: "2", name: 'Business Development', rank: 2, users: ["1", "3"]},
    {id: "3", name: 'Marketing', rank: 3, users: [1, 2]},
    {id: "4", name: 'Mobile Development', rank: 4, users: [1, 3]}
  ]
});

export default skill;
