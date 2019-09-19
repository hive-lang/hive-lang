import { expect } from "chai";
import { scopeIdGenerator } from "./scope-id-generator";

describe('types/unification/scope-id-generator', function() {
  it('returns sequence of IDs', function() {
    var generator = scopeIdGenerator();
    var id1, id2, id3;
    ({id: id1, newState: generator} = generator());
    ({id: id2, newState: generator} = generator());
    ({id: id3, newState: generator} = generator());
    expect([id1, id2, id3]).deep.equals([1, 2, 3]);
  });
});
