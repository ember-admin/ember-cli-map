/*global google */
import Ember from 'ember';
import AbstractMapMixin from 'ember-cli-map/mixins/abstract-map';
import layout from '../templates/components/google-map';

export default Ember.Component.extend(AbstractMapMixin, {
  layout: layout,

  mapType: 'asGoogleMap',

  initialize: Ember.on('didInsertElement', function() {
    var map, marker, options;
    options = {
      zoom: this.get('zoom'),
      center: this.get('center'),
      mapTypeId: this.get('mapTypeId')
    };
    map = new google.maps.Map(this.$().find(".map")[0], options);
    marker = this.initMarker(map);
    if (!this.get('disableAutocomplete')) {
      this.initAutocomplete(map, marker);
    }
    return google.maps.event.addListener(map, 'zoom_changed', () => {
      return this.setZoom(map.getZoom());
    });
  }),
  center: Ember.computed(function() {
    var coord;
    coord = this.centerCoords();
    return new google.maps.LatLng(coord[0], coord[1]);
  }),
  mapTypeId: Ember.computed(function() {
    return google.maps.MapTypeId.ROADMAP;
  }),
  initMarker: function(map) {
    var marker, options;
    options = {
      position: this.get('center'),
      map: map,
      draggable: true
    };
    marker = new google.maps.Marker(options);
    google.maps.event.addListener(marker, 'dragend', (event) => {
      var pos;
      map.setCenter(event.latLng);
      pos = marker.getPosition();
      return this.setAttrs(pos.lat(), pos.lng());
    });
    return marker;
  },
  initAutocomplete: function(map, marker) {
    var autocomplete, autocompleteView, input;
    autocompleteView = this.$('.google-map-autocomplete');
    input = autocompleteView[0];
    autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['geocode']
    });
    return google.maps.event.addListener(autocomplete, 'place_changed', () => {
      var place, pos;
      place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }
      pos = place.geometry.location;
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(pos);
        map.setZoom(17);
      }
      marker.setPosition(pos);
      return this.setAttrs(pos.lat(), pos.lng());
    });
  },
  actions: {
    
    onAutoPress(e){
      console.log("SDKSJDKSJDKJSDKJS", e)
    }
  }
});
