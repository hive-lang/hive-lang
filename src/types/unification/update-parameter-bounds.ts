import { map } from "@/functional/collections/lists";
import { ParameterRange } from "./parameter-range";
import { ParameterState } from "./parameter-state";
import { AssocList } from "@/functional/collections/assoc-lists";
import { lookup } from "@/functional/collections/assoc-lists/lookup";

export function updateParameterBounds<SourceContext>(
        parameters: AssocList<string, ParameterState<SourceContext>>,
        boundUpdates: AssocList<string, ParameterRange<SourceContext>>):
    AssocList<string, ParameterState<SourceContext>> {
  return map(
      parameters,
      ({key: symbol, value: state}) => {
        const updatedBounds = lookup(boundUpdates, symbol);
        const newBounds = updatedBounds !== null ? updatedBounds : state.bounds;
        return {
          key: symbol, 
          value: {
            ...state,
            bounds: newBounds,
          }
        };
      });
}
