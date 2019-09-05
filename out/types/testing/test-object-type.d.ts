import { TypeFlavor } from "@/types/generalized-type";
import { PropertyTypeRef } from "../object-type";
export declare function testObjectType<SourceContext, Flavour extends TypeFlavor>(obj: {
    [indexer: string]: PropertyTypeRef<SourceContext, Flavour>;
}): import("..").ObjectType<SourceContext, Flavour>;
