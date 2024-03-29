// app/models/user.js
import DS from "ember-data";

var user = DS.Model.extend({

  // Imported through LinkedIn.
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  // -> profile summary
  bio: DS.attr('string'), 
  isSpeaker: DS.attr('boolean'),
  rating: DS.attr('string'),
  skills: DS.attr('string'),
  // skills: DS.hasMany('skill'),

  // computed properties
  hbs_id: function() {
    return 'id-' + this.get('id');
  }.property()

});

// Fixtures
user.reopenClass({
  FIXTURES: [
    {id: 1, firstName: 'Jane', lastName: 'Doe', rating: "<img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'>", isSpeaker:true, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: "<button class='button small'>Entreprenuership</button><button class='button small'>Marketing</button><button class='button small'>Business Dev.</button>" },
    {id: 2, firstName: 'John', lastName: 'Smith', rating: "<img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'>", isSpeaker:true, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: "<button class='button small'>Entreprenuership</button><button class='button small'>Mobile Development</button>" },
    {id: 3, firstName: 'Bill', lastName: 'Smith', rating: "<img src='assets/images/rating-star.png'><img src='assets/images/rating-star.png'>", isSpeaker:false, bio:"Hi, my name is John and I have loads of experience in marketing and product development.", skills: "<button class='button small'>Entreprenuership</button><button class='button small'>Business Dev.</button>" }
  ]
});

export default user;
