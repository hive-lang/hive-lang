import { GeneralizedType, TypeFlavor } from "./generalized-type";
export declare abstract class ObjectType<SourceContext, Flavour extends TypeFlavor> {
    abstract keys(): Iterable<string>;
    abstract get(property: string): GeneralizedType<SourceContext, Flavour>;
}
export declare type SelfRef = 'self';
export declare const SELF_REF: SelfRef;
export declare type PropertyTypeRef<SourceContext, Flavour extends TypeFlavor> = SelfRef | GeneralizedType<SourceContext, Flavour>;
export declare function objectType<SourceContext, Flavour extends TypeFlavor>(propertyTypes: Map<string, PropertyTypeRef<SourceContext, Flavour>>): ObjectType<SourceContext, Flavour>;
