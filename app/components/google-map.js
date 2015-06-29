import Ember from 'ember';
import AbstractMapMixin from 'ember-cli-map/mixins/abstract-map';
var gmapView;

gmapView = Ember.Component.extend(AbstractMapMixin, {
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
    if (!this.get('disableAutocomplete')){
      this.initAutocomplete(map, marker);
    }
    return google.maps.event.addListener(map, 'zoom_changed', (function(_this) {
      return function() {
        return _this.setZoom(map.getZoom());
      };
    })(this));
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
    google.maps.event.addListener(marker, 'dragend', (function(_this) {
      return function(event) {
        var pos;
        map.setCenter(event.latLng);
        pos = marker.getPosition();
        return _this.setAttrs(pos.lat(), pos.lng());
      };
    })(this));
    return marker;
  },
  initAutocomplete: function(map, marker) {
    var autocomplete, autocompleteView, input;
    autocompleteView = this.get('MapAutocomplete');
    input = autocompleteView.$()[0];
    autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['geocode']
    });
    return google.maps.event.addListener(autocomplete, 'place_changed', (function(_this) {
      return function() {
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
        return _this.setAttrs(pos.lat(), pos.lng());
      };
    })(this));
  }
});

export default gmapView;
