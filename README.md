Ember Map
=========

[![Build Status](https://travis-ci.org/ember-admin/ember-cli-map.svg?branch=master)](https://travis-ci.org/ember-admin/ember-cli-map)
[![npm version](https://badge.fury.io/js/ember-cli-map.svg)](http://badge.fury.io/js/ember-cli-map)

Ember Map provides you with google-map and yandex-map components.

Add Maps Libraries
--------------
To use google apiKey you need to set it in `config/environment.js`.
```javascript
ENV['ember-cli-map'] = {
  googleApiKey: 'MYsecretKEY'
};
```

Model Setup
--------------
Declare fields to use with map component:

```javascript
asGoogleMap: ['lat', 'long', 'zoom'] // or
asYandexMap: ['lat', 'long', 'zoom']
```

###Example:

```javascript
export default DS.Model.extend({
    lat:       DS.attr('number'),
    long:      DS.attr('number'),
    zoom:      DS.attr('number'),
    asGoogleMap: ['lat', 'long', 'zoom']
});
```

#In your template

```handlebars
{{google-map model=model action='updateModel'}}
```

```handlebars
{{yandex-map model=model action='updateModel'}}
```

#In your route/controller

```javascript
actions: {
  updateModel(newCoordinates) {
    this.get('currentModel').setProperties(newCoordinates);
  }
}
```

License
----

[Licensed under MIT license] [1]

[1]:http://opensource.org/licenses/mit-license.php
