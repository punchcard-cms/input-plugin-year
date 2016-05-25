'use strict';

/**
 * year Input Plugin
 *
 *
 * A simple select input for years based on a range
 */
const validation = require('./lib/validation.js');
const yearRange = require('./lib/yearRange.js');


/**
 * Single year Input Plugin
 * @module yearInputPlugin
 */
module.exports = {
  name: 'year',
  description: 'A simple select input for years based on a range',
  validation: {
    yearValidation: validation,
  },
  scripts: {
    yearGenerate: yearRange,
  },
  inputs: {
    year: {
      validation: {
        function: 'yearValidation',
        on: 'change',
      },
      label: 'Please choose a year',
      placeholder: 'year',
      options: {
        minYear: '1900',
        maxYear: '2016',
      },
      type: 'select',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{year.id}}">{{year.label}}</label><select id="{{year.id}}" name="{{year.name}}"><option value="{{year.value}}"  class="year-range"></option></select></label>',
};
