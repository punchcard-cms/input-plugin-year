import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'select',
    value: 3,
  },
  all: {
    select: 'foo bar baz',
  },
  settings: {
    min: 0,
    max: 5,
  },
};

const badInput = {
  target: {
    name: 'select',
    value: 6,
  },
  all: {
    select: 'foo bar baz',
  },
  settings: {
    min: 0,
    max: 5,
  },
};

const settings = {
  target: {
    min: 0,
    max: 5,
  },
  all: {
    year: {
      min: 0,
      max: 5,
    },
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Valid bad input returns error
test('validate number out of range', t => {
  t.is(validation(badInput, settings), 'select should be within range!', 'Return string if not valid');
});
