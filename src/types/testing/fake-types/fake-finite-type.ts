import { FakeSourceContext } from "./fake-source-context";
import { FiniteType } from "../..";

export function fakeFiniteType(name: string): FiniteType<FakeSourceContext> {
  return {
    type: 'types/finite',
    sourceContext: {
      description: name,
    },
    symbol: name,
  };
}
