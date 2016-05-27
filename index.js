'use strict';

/**
 * year Input Plugin
 *
 *
 * A simple select input for years based on a range
 */
const validation = require('./lib/validation.js');


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
  inputs: {
    year: {
      validation: {
        function: 'yearValidation',
        on: 'change',
      },
      label: 'Please choose a year',
      placeholder: 'year',
      type: 'select',
      settings: {
        minYear: 2000,
        maxYear: 2016,
      },
    },
  },
  html: '<label for="{{year.id}}">{{year.label}}</label><select id="{{year.id}}" name="{{year.name}}">{% for i in range(year.settings.minYear, year.settings.maxYear) -%}<option value="{{ i }}">{{ i }}</option>{%- endfor %}</select></label>',
};
