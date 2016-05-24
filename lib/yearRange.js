'use strict';
/* eslint-disable */

/**
 * Function to generate a span of years based on minimum and maximum parameters
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} minYear - inputs minimum year value {String}
 * @param {Object} maxYear - inputs maxmium year value {String}
 * *
 * @module yearRange
 */

module.exports = function yearRange(input, minYear, maxYear) {
  var select = input.querySelector('.year-range');

  for (var i = minYear; i <= maxYear; i++) {
    var option = select.createElement('option');
    option.value = i;
    option.innerHTML = i;
    select.options.add(option);
  }
  return select;
};
