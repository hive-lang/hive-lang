import { GeneralizedType, TypeFlavor } from "./generalized-type";
import { BaseTypeParameterLabel } from "./base-type-parameter-label";

export abstract class ObjectType<SourceContext, Flavour extends TypeFlavor, FiniteLabel  extends BaseTypeParameterLabel> {
  abstract keys(): Iterable<string>;
  abstract get(property: string):
      GeneralizedType<SourceContext, Flavour, FiniteLabel>;
}

export type SelfRef = 'self';
export const SELF_REF: SelfRef = 'self';

export type PropertyTypeRef<SourceContext, Flavour extends TypeFlavor, FiniteLabel  extends BaseTypeParameterLabel> =
    SelfRef | GeneralizedType<SourceContext, Flavour, FiniteLabel>;

class ObjectTypeImpl<SourceContext, Flavour extends TypeFlavor, FiniteLabel  extends BaseTypeParameterLabel>
    extends ObjectType<SourceContext, Flavour, FiniteLabel> {
  private readonly properties:
      Map<string, PropertyTypeRef<SourceContext, Flavour, FiniteLabel>>;

  constructor(properties: Map<string, PropertyTypeRef<SourceContext, Flavour, FiniteLabel>>) {
    super();
    this.properties = properties;
  }

  keys(): Iterable<string> {
    return this.properties.keys();
  }

  get(property: string): GeneralizedType<SourceContext, Flavour, FiniteLabel> {
     const typeRef = this.properties.get(property);
     if (typeRef === undefined) {
       throw new Error();
     }
     if (typeRef === 'self') {
       return this;
     }
     return typeRef;
  }
}

export function objectType<SourceContext, Flavour extends TypeFlavor, FiniteLabel  extends BaseTypeParameterLabel>(
        propertyTypes: Map<string, PropertyTypeRef<SourceContext, Flavour, FiniteLabel>>):
    ObjectType<SourceContext, Flavour, FiniteLabel> {
  return new ObjectTypeImpl(propertyTypes);
}
