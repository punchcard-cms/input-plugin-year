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
    value: 2006,
  },
};

test('select fills options', t => {
  const rendered = nunjucks.renderString(plugin.html, data);
  t.true(contains(rendered, '<option value=\"2005\" >2005</option>'), 'Select must contain 2005');
});

test('min and max years are properly set', t => {
  t.true(data.year.settings.minYear < data.year.settings.maxYear, 'Select date ranges are properly formatted');
});

test('selected attribute given to value', t => {
  const rendered = nunjucks.renderString(plugin.html, data);
  t.true(contains(rendered, '<option value=\"2006\" selected>2006</option>'), 'value specified must have the \"selected\" attribute');
});
