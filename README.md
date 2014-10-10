Ember Map
=========

[![Build Status](https://travis-ci.org/ember-admin/ember-cli-map.svg?branch=v0.1.0)](https://travis-ci.org/ember-admin/ember-cli-map)

Ember Map provides you with google-map and yandex-map components.

Version
----

0.1.0

Add Maps Libraries
--------------

```
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&amp;key={ApiKey}&libraries=places"></script>
<script src="http://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-Ru"></script>
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
