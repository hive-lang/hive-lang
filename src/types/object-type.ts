import { GeneralizedType, TypeFlavor } from "./generalized-type";

export abstract class ObjectType<SourceContext, Flavour extends TypeFlavor> {
  abstract keys(): Iterable<string>;
  abstract get(property: string):
      GeneralizedType<SourceContext, Flavour>;
}
