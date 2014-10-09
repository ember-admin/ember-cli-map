import Ember from 'ember';
import startApp from '../helpers/start-app';

var App, server;

module('Acceptance: Admin', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

asyncTest('google maps are displayed', function() {
  expect(1);
  visit('/');
  Ember.run.later(this, function() {
    start();
    equal(find('.gm-style').length, 2);
  }, 300);
});