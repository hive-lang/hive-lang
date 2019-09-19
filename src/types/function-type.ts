import { GeneralizedType, TypeFlavor } from "./generalized-type";
import { ObjectType } from "./object-type";
import { BaseTypeParameterLabel } from "./base-type-parameter-label";

export abstract class FunctionType<SourceContext, Flavour extends TypeFlavor, FiniteLabel extends BaseTypeParameterLabel> {
  abstract parameters(): ObjectType<SourceContext, Flavour, FiniteLabel>;
  abstract result(): GeneralizedType<SourceContext, Flavour, FiniteLabel>;
}
