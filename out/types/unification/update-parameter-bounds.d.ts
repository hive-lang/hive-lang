import { ParameterRange } from "./parameter-range";
import { ParameterState } from "./parameter-state";
import { AssocList } from "@/functional/collections/assoc-lists";
export declare function updateParameterBounds<SourceContext>(parameters: AssocList<string, ParameterState<SourceContext>>, boundUpdates: AssocList<string, ParameterRange<SourceContext>>): AssocList<string, ParameterState<SourceContext>>;
