import { GeneralizedType } from "./generalized-type";

export abstract class ObjectType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean> {
  abstract keys(): Set<string>;
  abstract get(property: string):
      GeneralizedType<SourceContext, IncludesPlaceholder, IncludesParameter>;
}
