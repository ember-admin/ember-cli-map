import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      lat: 40,
      long: 50,
      zoom: 1,
      asGoogleMap: ['lat', 'long', 'zoom'],
      asYandexMap: ['lat', 'long', 'zoom']
    });
  },
  actions: {
    updateModel(newCoordinates) {
      this.get('currentModel').setProperties(newCoordinates);
    }
  }
});
