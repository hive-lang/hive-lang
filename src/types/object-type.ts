import { GeneralizedType } from "./generalized-type";

export abstract class ObjectType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean,
      IncludesRangeTypes extends boolean> {
  abstract keys(): Set<string>;
  abstract get(property: string):
      GeneralizedType<
          SourceContext,
          IncludesPlaceholder,
          IncludesParameter,
          IncludesRangeTypes>;
}

type PropertyRef<
        SourceContext,
        IncludesPlaceholder extends boolean,
        IncludesParameter extends boolean,
        IncludesRangeTypes extends boolean> =
    'self'
        | GeneralizedType<
            SourceContext,
            IncludesPlaceholder,
            IncludesParameter,
            IncludesRangeTypes>;

class ObjectTypeImpl<
        SourceContext,
        IncludesPlaceholder extends boolean,
        IncludesParameter extends boolean,
        IncludesRangeTypes extends boolean>
    extends ObjectType<
        SourceContext,
        IncludesPlaceholder,
        IncludesParameter,
        IncludesRangeTypes> {
  private readonly properties:
      Map<
          string,
          PropertyRef<
              SourceContext,
              IncludesPlaceholder,
              IncludesParameter,
              IncludesRangeTypes>>;

  constructor() {
      
  }
}

export function objectType() {

}
