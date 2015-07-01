module.exports = {
  name: 'ember-cli-map',

  included: function(app) {
    this.app = app;
    app.import('vendor/map.css');
  },
  contentFor: function(type, config) {
    if (type === 'body-footer') {
      var libs = '<script src="http://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-Ru"></script>';

      if (config['ember-cli-map'].googleApiKey) {
        var key = config['ember-cli-map'].googleApiKey;
        libs = libs + '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&key=' + key + '&libraries=places"></script>';
      }
      else {
        libs = libs + '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>';
      }

      return libs;
    }
  }
};
