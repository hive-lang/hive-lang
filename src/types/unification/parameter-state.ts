import { Variance } from "./variance";
import { ParameterRange } from "./parameter-range";

export interface ParameterState<SourceContext> {
  readonly baseVariance: Variance;
  readonly bounds: ParameterRange<SourceContext>;
}
