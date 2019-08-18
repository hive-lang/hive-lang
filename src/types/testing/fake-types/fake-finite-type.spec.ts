import { expect } from "chai";
import { fakeFiniteType } from "./fake-finite-type";

describe('fakeFiniteType', function() {
  let type = fakeFiniteType('foo');
  it('should have type of "types/finite"', function() {
    expect(type.type).equals('types/finite');
  });
  it('should have specified symbol', function() {
    expect(type.symbol).equals('foo');
  });
  it('should have sourceContext = label', function() {
    expect(type.sourceContext).deep.equals({description: 'foo'});
  });
});
