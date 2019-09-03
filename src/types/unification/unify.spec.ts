import { expect } from "chai";
import { unify } from "./unify";
import { finite } from "../testing/types/finite";
import { Variance } from "./variance";
import { unifySuccess } from "./unify-result";

describe('unify', function() {
  it('is a subtype of type with same symbol', function() {
    expect(unify(finite("foo"), finite("foo"), Variance.Covariant, null))
        .deep.equals(unifySuccess());
  });
});
