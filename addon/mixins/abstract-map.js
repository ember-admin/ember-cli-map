import Ember from 'ember';

export default Ember.Mixin.create({

  lat: Ember.computed(function() {
    return this.get("model." + (this.get('latAttr')));
  }),
  setLat: function(value) {
    return this.get('model').set(this.get('latAttr'), value);
  },
  latAttr: Ember.computed(function() {
    return this.get("model." + (this.get('mapType')))[0];
  }),
  long: Ember.computed(function() {
    return this.get("model." + (this.get('longAttr')));
  }),
  longAttr: Ember.computed(function() {
    return this.get("model." + (this.get('mapType')))[1];
  }),
  setLong: function(value) {
    return this.get('model').set(this.get('longAttr'), value);
  },
  zoom: Ember.computed(function() {
    return this.get("model." + (this.get('zoomAttr'))) || 8;
  }),
  zoomAttr: Ember.computed(function() {
    return this.get("model." + (this.get('mapType')))[2];
  }),
  setZoom: function(value) {
    return this.get('model').set(this.get('zoomAttr'), value);
  },
  centerCoords: function() {
    if (this.get('lat') && this.get('long')) {
      return [this.get('lat'), this.get('long')];
    } else {
      return [this.get('defaultLat')|| "50.44067063154785", this.get('defaultLong') || "30.52654266357422"];
    }
  },
  setAttrs: function(lat, long) {
    if (this.get('disableMapping')){
      return;
    }
    this.setLat(lat);
    return this.setLong(long);
  }
});
