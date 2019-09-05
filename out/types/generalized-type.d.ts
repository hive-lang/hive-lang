import { FiniteType } from "./finite-type";
import { ObjectType } from "./object-type";
import { FunctionType } from "./function-type";
import { TypePlaceholder } from "./type-placeholder";
import { TypeParameter } from "./type-parameter";
import { AnythingType } from "./anything-type";
import { InvalidType } from "./invalid-type";
export declare enum TypeFlavor {
    Type = 0,
    Expression = 1,
    Parameterized = 2
}
export declare type GeneralizedType<SourceContext, Flavour extends TypeFlavor> = (Flavour extends (TypeFlavor.Expression | TypeFlavor.Parameterized) ? TypePlaceholder<SourceContext> : never) | (Flavour extends TypeFlavor.Parameterized ? TypeParameter<SourceContext> : never) | (Flavour extends (TypeFlavor.Expression | TypeFlavor.Parameterized) ? AnythingType | InvalidType : never) | FiniteType<SourceContext> | ObjectType<SourceContext, Flavour> | FunctionType<SourceContext, Flavour>;
