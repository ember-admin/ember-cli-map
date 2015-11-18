/*global ymaps */
import Ember from 'ember';
import AbstractMapMixin from 'ember-cli-map/mixins/abstract-map';
import layout from '../templates/components/yandex-map';

const { Component, computed } = Ember;

var genId = function() {
  var arr = new Uint8Array(8);
  window.crypto.getRandomValues(arr);
  return [].map.call(arr, function(n) { return n.toString(16); }).join("");
};

export default Component.extend(AbstractMapMixin, {
  layout: layout,

  mapType: 'asYandexMap',

  childId: Ember.computed({
    get(){
      return genId();
    }
  }),

  didInsertElement: function() {
    return ymaps.ready(() => {
      return this.initMap.call(this);
    });
  },

  initMap: function() {
    var map;
    var self = this;
    map = new ymaps.Map(this.get('childId'), {
      center: this.get('center'),
      zoom: this.get('zoom')
    });
    this.initMarker(map);
    map.events.add('click', function (click) {
      self.addMarker(map, click.get('coords'));
    });
    map.controls.add('zoomControl', {
      left: 5,
      top: 5
    }).add('typeSelector').add('mapTools', {
      left: 35,
      top: 5
    });
    return this.initAutocomplete();
  },
  center: computed(function() {
    return this.centerCoords();
  }),
  addMarker: function(map, coord) {
    var mark;
    var i = 1;
    map.geoObjects.each(function (geoObject) {
      i+=1;
    });
    mark = new ymaps.Placemark(coord, {
      iconContent: `${i}`,
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
