import test from 'ava';
import yearRange from '../lib/yearRange.js';

class MockOption {
  constructor() {
    this.options = [];
  }
}

class MockOptionSet {
  constructor() {
    this.set = [];
  }
  add(elem) {
    this.set.push(elem);
  }
  size() {
    return this.set.length;
  }
}

class MockSelect {
  constructor() {
    this.options = new MockOptionSet();
  }
  createElement() {
    return new MockOption();
  }
  has(value) {
    for (let i = 0; i < this.options.size(); i++) {
      if (this.options.set[i].value === value) {
        return true;
      }
    }

    return false;
  }
}

const mockSelect = new MockSelect();

const mockPlugin = {
  querySelector() {
    return mockSelect;
  },
};

test('select generates multiple years from given range', t => {
  yearRange(mockPlugin, 1994, 1998);
  t.true(mockSelect.has(1996));
  t.true(mockSelect.has(1997));
  t.false(mockSelect.has(1999));
});
