/*global google */
import Ember from 'ember';
import layout from '../templates/components/google-map-autocomplete';

export default Ember.Component.extend({
  layout: layout,

  address: Ember.computed.alias('model.address').readOnly(),
  lat: Ember.computed.alias('model.lat').readOnly(),
  long: Ember.computed.alias('model.long').readOnly(),

  initialize: Ember.on('didInsertElement', function() {
    let inputElement = this.$('input')[0];
    let autocompleteField = new google.maps.places.Autocomplete(inputElement, {types: ['geocode']});
    autocompleteField.addListener('place_changed', ()=>{
      //HACK: context
      this.updateModel();
    });
    this.set('autocomplete', autocompleteField);
    if(this.get('class')){
      this.$('input').addClass(this.get('class'));
    }
  }),

  updateModel: function () {
    let place = this.get('autocomplete').getPlace();
    let geometry = place.geometry;
    if(geometry){
      this.sendAction('action',{
        address: place.formatted_address,
        lat: geometry.location.lat(),
        long: geometry.location.lng()
      });
    }
  }
});
