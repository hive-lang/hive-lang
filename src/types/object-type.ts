import { GeneralizedType, TypeFlavor } from "./generalized-type";

export abstract class ObjectType<SourceContext, Flavour extends TypeFlavor> {
  abstract keys(): Iterable<string>;
  abstract get(property: string):
      GeneralizedType<SourceContext, Flavour>;
}

export type SelfRef = 'self';
export const SELF_REF: SelfRef = 'self';

export type PropertyTypeRef<SourceContext, Flavour extends TypeFlavor> =
    SelfRef | GeneralizedType<SourceContext, Flavour>;

class ObjectTypeImpl<SourceContext, Flavour extends TypeFlavor>
    extends ObjectType<SourceContext, Flavour> {
  private readonly properties:
      Map<string, PropertyTypeRef<SourceContext, Flavour>>;

  constructor(properties: Map<string, PropertyTypeRef<SourceContext, Flavour>>) {
    super();
    this.properties = properties;
  }

  keys(): Iterable<string> {
    return this.properties.keys();
  }

  get(property: string): GeneralizedType<SourceContext, Flavour> {
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

export function objectType<SourceContext, Flavour extends TypeFlavor>(
        propertyTypes: Map<string, PropertyTypeRef<SourceContext, Flavour>>):
    ObjectType<SourceContext, Flavour> {
  return new ObjectTypeImpl(propertyTypes);
}
