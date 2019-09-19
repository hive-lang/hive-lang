import { FiniteType } from "./finite-type";
import { ObjectType } from "./object-type";
import { FunctionType } from  "./function-type";
import { TypePlaceholder } from "./type-placeholder";
import { TypeParameter } from "./type-parameter";
import { AnythingType } from "./anything-type";
import { InvalidType } from "./invalid-type";

export enum TypeFlavor {
    Type,
    Expression,
    Parameterized,
}

// Ideally, types would be parameterized on their children, e.g.
//
// type Type = FiniteType | ObjectType<Type>;
//
// However this method of recursion is not supported by TypeScript
// (see https://github.com/microsoft/TypeScript/issues/3496#issuecomment-128553540).
//
// To define a recursive type, the back-references need to be done
// inside interfaces. This means that we can't pass the set of child
// types in as a parameter - the different types need to 'know'
// about the set of children they support. However, we can pass in
// a type parameter that configures that list.
//
// Therefore all possible sets of types must be defined here.
export type GeneralizedType<SourceContext, Flavour extends TypeFlavor> =
    (Flavour extends (TypeFlavor.Expression | TypeFlavor.Parameterized) ? TypePlaceholder<SourceContext> : never)
        | (Flavour extends TypeFlavor.Parameterized ? TypeParameter<SourceContext> : never)
        | (Flavour extends (TypeFlavor.Expression | TypeFlavor.Parameterized) ? AnythingType | InvalidType : never)
        | FiniteType<SourceContext>
        | ObjectType<SourceContext, Flavour>
        | FunctionType<SourceContext, Flavour>;
