import { objectType } from "@/types";
import { TypeFlavor, GeneralizedType } from "@/types/generalized-type";
import { PropertyTypeRef } from "../object-type";
import { BaseTypeParameterLabel } from "../base-type-parameter-label";

export function testObjectType<SourceContext, Flavour extends TypeFlavor, FiniteLabel extends BaseTypeParameterLabel>(
    obj: {[indexer: string]: PropertyTypeRef<SourceContext, Flavour, FiniteLabel>}) {
    const map = new Map<string, PropertyTypeRef<SourceContext, Flavour, FiniteLabel>>();
    for (const key in obj) {
      map.set(key, obj[key]);
    }
  return objectType(map);
}
