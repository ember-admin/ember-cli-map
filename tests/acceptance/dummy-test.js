import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App, server;

module('Acceptance: Admin', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

asyncTest('google maps are displayed', function() {
  assert.expect(1);
  visit('/');
  Ember.run.later(this, function() {
    start();
    assert.equal(find('.gm-style').length, 2);
  }, 300);
});

asyncTest('yandex maps are displayed', function() {
  assert.expect(1);
  visit('/');
  Ember.run.later(this, function() {
    start();
    assert.equal(find('.ymaps-map').length, 1);
  }, 300);
});
