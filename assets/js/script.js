var $ = require('jquery');

// Modules Dependencies
var toggle = require('./modules/toggle');
var g = require('./modules/g');
var skipLink = require('./modules/skipLink');


/*-------------------------------------------
  DOCUMENT READY FUNCTIONS
  All functions to be called on
  doc ready
-------------------------------------------*/
$(document).ready(function() {
    skipLink.init();
    toggle.init();
    toggle.successStories();
    toggle.map();
    toggle.grid();
    toggle.story();
    toggle.videoSwap();
    g.init();
});
