import { objectType } from "@/types";
import { TypeFlavor, GeneralizedType } from "@/types/generalized-type";
import { PropertyTypeRef } from "../object-type";

export function testObjectType<SourceContext, Flavour extends TypeFlavor>(
    obj: {[indexer: string]: PropertyTypeRef<SourceContext, Flavour>}) {
    const map = new Map<string, PropertyTypeRef<SourceContext, Flavour>>();
    for (const key in obj) {
      map.set(key, obj[key]);
    }
  return objectType(map);
}
