import { GeneralizedType } from "./generalized-type";
import { TypeCase } from "./type-case";

export interface ObjectType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean> {
  case: TypeCase.Object;
  keys(): Set<string>;
  get(property: string):
      GeneralizedType<SourceContext, IncludesPlaceholder, IncludesParameter>;
}
