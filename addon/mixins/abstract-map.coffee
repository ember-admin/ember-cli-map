`import Ember from 'ember'`

abstractMapMixin = Ember.Mixin.create

  lat: (->
    @get("model.#{@get('latAttr')}")
  ).property()

  setLan: (value) ->
    @get('model').set(@get('latAttr'), value)

  latAttr:(->
    @get("model.#{@get('mapType')}")[0]
  ).property()

  long:(->
    @get("model.#{@get('longAttr')}")
  ).property()

  longAttr:(->
    @get("model.#{@get('mapType')}")[1]
  ).property()

  setLong: (value) ->
    @get('model').set(@get('longAttr'), value)

  zoom:(->
    @get("model.#{@get('zoomAttr')}") || 8
  ).property()

  zoomAttr: (->
    @get("model.#{@get('mapType')}")[2]
  ).property()

  setZoom: (value) ->
    @get('model').set(@get('zoomAttr'), value)

  centerCoords: ->
    if @get('lat') && @get('long')
      [@get('lat'), @get('long')]
    else
      ["50.44067063154785","30.52654266357422"]

  setAttrs: (pos) ->
    if pos['push']
      @setLat(pos[0])
      @setLong(pos[1])
    else
      @setLat(pos.ob)
      @setLong(pos.pb)

`export default abstractMapMixin`