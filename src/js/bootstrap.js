window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

const lozad = require('lozad');
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

require('./fontawesome-all-5.0.2');
require('owl.carousel') ;

const mediaelementplayer = require('mediaelement');


