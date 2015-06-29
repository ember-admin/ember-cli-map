Ember Map
=========

[![Build Status](https://travis-ci.org/ember-admin/ember-cli-map.svg?branch=master)](https://travis-ci.org/ember-admin/ember-cli-map)
[![npm version](https://badge.fury.io/js/ember-cli-map.svg)](http://badge.fury.io/js/ember-cli-map)

Ember Map provides you with google-map and yandex-map components.

Add Maps Libraries
--------------
To use google maps you need to set apiKey in `config/environment.js`.
```
ENV['ember-cli-map'] = {
  googleApiKey: 'MYsecretKEY'
};
```

Model Setup
--------------
Declare fields to use with map component:

```
asGoogleMap: ['lat', 'long', 'zoom'] // or
asYandexMap: ['lat', 'long', 'zoom']
```

###Example:

```
export default DS.Model.extend({
    lat:       DS.attr('number'),
    long:      DS.attr('number'),
    zoom:      DS.attr('number'),
    asGoogleMap: ['lat', 'long', 'zoom']
});
```

#In your template

```
{{google-map model=model}}
```

For yandex-map component, you should also pass childId parameter - unique id that will be given to the div this map is rendered into.


```
{{yandex-map model=model childId='yandex-map'}}
```

License
----

[Licensed under MIT license] [1]

[1]:http://opensource.org/licenses/mit-license.php
