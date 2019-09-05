import { GeneralizedType, TypeFlavor } from "./generalized-type";
import { ObjectType } from "./object-type";
export declare abstract class FunctionType<SourceContext, Flavour extends TypeFlavor> {
    abstract parameters(): ObjectType<SourceContext, Flavour>;
    abstract result(): GeneralizedType<SourceContext, Flavour>;
}
