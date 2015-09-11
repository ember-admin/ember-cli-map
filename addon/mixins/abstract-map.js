import Ember from 'ember';
const { Mixin, computed } = Ember;

export default Mixin.create({
  defaultLat: "50.44067063154785",
  defaultLong: "30.52654266357422",

  mapAttrs: computed(function() {
    return this.get(`model.${this.get('mapType')}`);
  }),
  lat: computed({
    get() {
        if (!this._lat) {
          this._lat = this.get(this.keyFor(0));
        }
        return this._lat;
      },
      set(_, value) {
        this._lat = value;
        return value;
      }
  }),
  long: computed({
    get() {
        if (!this._long) {
          this._long = this.get(this.keyFor(1));
        }
        return this._long;
      },
      set(_, value) {
        this._long = value;
        return value;
      }
  }),
  zoom: computed({
    get() {
        if (!this._zoom) {
          this._zoom = this.get(this.keyFor(2));
        }
        return this._zoom;
      },
      set(_, value) {
        this._zoom = value;
        return value;
      }
  }),

  keyFor(index) {
    let key = this.get('mapAttrs')[index];
    return `model.${key}`;
  },
  setAttrs(lat, long, zoom) {
    if (this.get('disableMapping')) {
      return;
    }
    if (lat) {
      this.set('lat', lat);
    }
    if (long) {
      this.set('long', long);
    }
    if (zoom) {
      this.set('zoom', zoom);
    }

    return this.sendAction('action', {
      lat: this.get('lat'),
      long: this.get('long'),
      zoom: this.get('zoom')
    });
  },
  setZoom(zoom) {
    return this.setAttrs(null, null, zoom);
  },
  centerCoords() {
    if (this.get('lat') && this.get('long')) {
      return [this.get('lat'), this.get('long')];
    } else {
      return [this.get('defaultLat'), this.get('defaultLong')];
    }
  }
});
