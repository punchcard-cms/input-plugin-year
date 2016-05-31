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
    empty: false,
  },
  all: {
    select: {
      empty: false,
    },
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Invalid input
test('validate correct input', t => {
  input.target.value = '';
  t.is(validation(input, settings), 'select cannot be left blank!', 'Return string if not valid');
});

// Valid bad input returns error
test('validate number out of range', t => {
  t.is(validation(badInput, settings), 'select should be within range!', 'Return string if not valid');
});
