import { GeneralizedType } from "./generalized-type";
import { ObjectType } from "./object-type";

export abstract class FunctionType<
      SourceContext,
      IncludesPlaceholder extends boolean,
      IncludesParameter extends boolean,
      IncludesRangeTypes extends boolean> {
  abstract parameters():
      ObjectType<
          SourceContext,
          IncludesPlaceholder,
          IncludesParameter,
          IncludesRangeTypes>;
  abstract result():
      GeneralizedType<
          SourceContext,
          IncludesPlaceholder,
          IncludesParameter,
          IncludesRangeTypes>;
}
