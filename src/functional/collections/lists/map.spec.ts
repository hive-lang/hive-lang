import { expect } from "chai";
import { map } from './map';
import { listFromArray } from "./list";

describe('function/collections/lists/map', function() {
  it('maps null to null', function() {
    expect(map(null, (x: number) => x + x))
        .equals(null);
  });

  it('maps list', function() {
    expect(map(listFromArray([1, 2, 3]), (x: number) => x + x))
        .deep.equals(listFromArray([2, 4, 6]));
  });
});
