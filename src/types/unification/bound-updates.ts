import { ParameterRange } from "./parameter-range";
import { AssocList } from "@/functional/collections/assoc-lists/assoc-list";

export type BoundUpdates<SourceContext> = {
  readonly expected: AssocList<string, ParameterRange<SourceContext>> | null,
  readonly actual: AssocList<string, ParameterRange<SourceContext>> | null,
};
