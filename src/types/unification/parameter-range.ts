import { ParameterizedType } from "../parameterized-type";

export interface ParameterRange<SourceContext> {
  readonly general: ParameterizedType<SourceContext>;
  readonly specific: ParameterizedType<SourceContext> | null;
}
