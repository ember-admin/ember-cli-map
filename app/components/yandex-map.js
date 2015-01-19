import Ember from 'ember';
import AbstractMapMixin from 'ember-cli-map/mixins/abstract-map';
var yandexMapView;

yandexMapView = Ember.Component.extend(AbstractMapMixin, {
  mapType: 'asYandexMap',
  didInsertElement: function() {
    var self;
    self = this;
    return ymaps.ready((function(_this) {
      return function() {
        return _this.initMap.call(self);
      };
    })(this));
  },
  initMap: function() {
    var map;
    map = new ymaps.Map(this.get('childId'), {
      center: this.get('center'),
      zoom: this.get('zoom')
    });
    this.initMarker(map);
    map.controls.add('zoomControl', {
      left: 5,
      top: 5
    }).add('typeSelector').add('mapTools', {
      left: 35,
      top: 5
    });
    return this.initAutocomplete();
  },
  center: (function() {
    return this.centerCoords();
  }).property(),
  initMarker: function(map) {
    var mark;
    mark = new ymaps.Placemark(this.get('center'), {
      iconContent: '1',
      balloonContent: '',
      hintContent: ''
    }, {
      preset: 'twirl#violetIcon',
      draggable: true
    });
    map.geoObjects.add(mark);
    return mark.events.add("dragend", (function(_this) {
      return function(e) {
        return _this.setAttrs(mark.geometry.getCoordinates());
      };
    })(this));
  },
  initAutocomplete: function(map, marker) {
    var autocompleteView, input;
    autocompleteView = this.get('MapAutocomplete');
    return input = autocompleteView.$().hide();
  }
});

export default yandexMapView;
