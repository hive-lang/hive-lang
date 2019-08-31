import { GeneralizedType } from "./generalized-type";
import { ObjectType } from "./object-type";
import { TypeCase } from "./type-case";

export interface FunctionType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean> {
  case: TypeCase.Function;
  parameters: ObjectType<SourceContext, IncludesPlaceholder, IncludesParameter>;
  result: GeneralizedType<SourceContext, IncludesPlaceholder, IncludesParameter>;
}
