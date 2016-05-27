import test from 'ava';
import contentTypes from 'punchcard-content-types';
import nunjucks from 'nunjucks';
import contains from 'validator/lib/contains';

import plugin from '../';

contentTypes.pluginTests(test, plugin);

const data = {
  year: {
    label: 'Please choose a year',
    placeholder: 'year',
    type: 'select',
    settings: {
      minYear: 2000,
      maxYear: 2016,
    },
  },
};

test('select fills options', t => {
  // Render html
  const rendered = nunjucks.renderString(plugin.html, data);

  // check the options
  t.true(contains(rendered, '<option value=\"2005\">2005</option>'), 'Select must contain 2005');
});

test('min and max years are properly set', t => {
  // check the options
  t.true(data.year.settings.minYear < data.year.settings.maxYear, 'Select date ranges are properly formatted');
});
