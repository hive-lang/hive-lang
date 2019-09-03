import { expect } from "chai";
import { lookup } from './lookup';
import { assocFromMap, assocFromObject } from "./assoc-list";

describe('function/collections/asssoc-lists/lookup', function() {
  it('finds nothing in null', function() {
    expect(lookup(null, 'a')).equals(null);
  });

  it('finds nothing if key missing', function() {
    expect(lookup(assocFromObject({a: 1, b: 2, c: 3}), 'd'))
        .equals(null);
  });

  it('finds value for key', function() {
    expect(lookup(assocFromObject({a: 1, b: 2, c: 3}), 'b'))
        .equals(2);
  });
});
