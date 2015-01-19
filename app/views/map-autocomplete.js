import Ember from 'ember';
var mapAutocompleteView;

mapAutocompleteView = Ember.TextField.extend({
  keyPress: function(event) {
    if (event.keyCode === 13) {
      return event.preventDefault();
    }
  }
});

export default mapAutocompleteView;