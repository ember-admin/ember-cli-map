import Ember from 'ember';
var ApplicationRoute;

ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      lat: 40,
      long: 50,
      zoom: 1,
      asGoogleMap: ['lat', 'long', 'zoom'],
      asYandexMap: ['lat', 'long', 'zoom']
    });
  }
});

export default ApplicationRoute;