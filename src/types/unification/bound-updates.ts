import { ParameterRange } from "./parameter-range";
import { AssocList } from "@/functional/collections/assoc-lists";

export type BoundUpdates<SourceContext> = {
  readonly expected: AssocList<string, ParameterRange<SourceContext>>,
  readonly actual: AssocList<string, ParameterRange<SourceContext>>,
};
