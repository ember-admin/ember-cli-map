module.exports = {
  name: 'ember-cli-map',

  included: function(app) {
    this.app = app;
    app.import('vendor/map.css');
  },
  contentFor: function(type, config) {
    if (type === 'body-footer' && config.environment !== 'test') {
      var libs = '<script src="https://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-Ru"></script>';
      if (config['ember-cli-map'] && config['ember-cli-map'].googleApiKey) {
        var key = config['ember-cli-map'].googleApiKey;
        libs = libs + '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false&key=' + key + '&libraries=places"></script>';
      } else {
        libs = libs + '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places"></script>';
      }

      return libs;
    }

    if (type === 'test-body-footer' && config.environment === 'test') {
      var libs = '<script src="http://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-Ru"></script>';

      libs = libs + '<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=places"></script>';

      return libs;
    }
  }
};
