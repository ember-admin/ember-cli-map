module.exports = {
  name: 'ember-cli-map',

  included: function(app) {
    this.app = app;
    app.import('vendor/map.css')
  }
};
