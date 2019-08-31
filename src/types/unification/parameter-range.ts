import { ExpressionType } from "@/types";

export interface ParameterRange<SourceContext> {
  readonly lower: ExpressionType<SourceContext>;
  readonly upper: ExpressionType<SourceContext>;
}
