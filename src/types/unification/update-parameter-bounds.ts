import { List, map } from "@/functional/collections/lists";
import { ParameterRange } from "./parameter-range";
import { ParameterState } from "./parameter-state";
import { zip } from "@/functional/collections/lists/zip";
import { AssocList, KeyValue } from "@/functional/collections/assoc-lists/assoc-list";
import { lookup } from "@/functional/collections/assoc-lists/lookup";

// export function updateParameterBounds<SourceContext>(
//         parameters: AssocList<string, ParameterState<SourceContext>>,
//         newBounds: List<ParameterRange<SourceContext>>):
//     AssocList<string, ParameterState<SourceContext>> | null {
//   return map(
//     zip(parameters, newBounds),
//     ({first: {key: symbol, value: state}, second: bounds}) => {
//       const result: KeyValue<string, ParameterState<SourceContext>> = {
//         key: symbol, 
//         value: {
//           baseVariance: state.baseVariance,
//           bounds: bounds,
//         }
//       };
//       return result;
//     }
//   );
// }

export function updateParameterBounds<SourceContext>(
        parameters: AssocList<string, ParameterState<SourceContext>>,
        boundUpdates: AssocList<string, ParameterRange<SourceContext>>):
    AssocList<string, ParameterState<SourceContext>> | null {
  return map(
      parameters,
      ({key: symbol, value: state}) => {
        const updatedBounds = lookup(boundUpdates, symbol);
        const newBounds = updatedBounds !== null ? updatedBounds : state.bounds;
        const result: KeyValue<string, ParameterState<SourceContext>> = {
          key: symbol, 
          value: {
            ...state,
            bounds: newBounds,
          }
        };
        return result;
      });
}
