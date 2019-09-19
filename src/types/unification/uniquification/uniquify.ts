import { TypeFlavor, GeneralizedType } from '@/types/generalized-type';
import { TypeParameter } from '@/types/type-parameter';
import { ObjectType } from '@/types/object-type';
import { FunctionType } from '@/types/function-type';

export function uniquify<SourceContext>(
        type: GeneralizedType<SourceContext, TypeFlavor.Parameterized>):
    GeneralizedType<SourceContext, TypeFlavor.Parameterized> {
  if (type instanceof TypeParameter) {
    throw new Error();
  } else if (type instanceof ObjectType) {
    throw new Error();
  } else if (type instanceof FunctionType) {
    throw new Error();
  }

  return type;
}
