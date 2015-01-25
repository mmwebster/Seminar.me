// app/models/user.js
import DS from "ember-data";

var skill = DS.Model.extend({

  name: DS.attr('string'),
  rank: DS.attr('number'),

});

skill.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Entreprenuership', rank: 1},
    {id: 2, name: 'Business Development', rank: 2},
    {id: 3, name: 'Marketing', rank: 3},
    {id: 4, name: 'Mobile Development', rank: 4}
  ]
});

export default skill;
