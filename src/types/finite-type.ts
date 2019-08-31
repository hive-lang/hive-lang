import { TypeCase } from "./type-case";

export interface FiniteType<SourceContext> {
  case: TypeCase.Finite;
  sourceContext: SourceContext;
  symbol: string;
}
