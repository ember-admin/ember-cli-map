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

test('google maps are displayed', function(assert) {
  assert.expect(1);
  visit('/');
  stop();
  Ember.run.later(this, function() {
    start();
    assert.equal(find('.gm-style').length, 2);
  }, 1000);
});

test('yandex maps are displayed', function(assert) {
  assert.expect(1);
  visit('/');
  stop();
  Ember.run.later(this, function() {
    start();
    assert.equal(find('.ymaps-map').length, 1);
  }, 1000);
});
