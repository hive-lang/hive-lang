import { GeneralizedType } from "./generalized-type";
import { ObjectType } from "./object-type";

export abstract class FunctionType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean> {
  abstract parameters(): ObjectType<SourceContext, IncludesPlaceholder, IncludesParameter>;
  abstract result(): GeneralizedType<SourceContext, IncludesPlaceholder, IncludesParameter>;
}
