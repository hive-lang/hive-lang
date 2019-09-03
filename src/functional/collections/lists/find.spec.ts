import { expect } from "chai";
import { find } from './find';
import { listFromArray } from "./list";

describe('function/collections/lists/find', function() {
  it('finds nothing in null', function() {
    expect(find(null, (x: number) => true))
        .equals(null);
  });

  it('finds nothing when predicate is false', function() {
    expect(find(listFromArray([1, 2, 3]), (x: number) => false))
        .equals(null);
  });

  it('finds item matching predicate', function() {
    expect(find(listFromArray([1, 2, 3]), (x: number) => x > 2))
        .equals(3);
  });
});
