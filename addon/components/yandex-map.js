/*global ymaps */
import Ember from 'ember';
import AbstractMapMixin from 'ember-cli-map/mixins/abstract-map';
import layout from '../templates/components/yandex-map';

export default Ember.Component.extend(AbstractMapMixin, {
  layout: layout,

  mapType: 'asYandexMap',
  didInsertElement: function() {
    return ymaps.ready(() => {
      return this.initMap.call(this);
    });
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
  center: Ember.computed(function() {
    return this.centerCoords();
  }),
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
    return mark.events.add("dragend", () => {
      return this.setAttrs(mark.geometry.getCoordinates());
    });
  },
  initAutocomplete: function() {
    var autocompleteView, input;
    autocompleteView = this.$('.yandex-maps-autocomplete');
    return input = autocompleteView.hide();
  }
});
