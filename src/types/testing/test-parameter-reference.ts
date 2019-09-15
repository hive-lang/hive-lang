import { TypeParameter } from '@/types';
import { TestingSourceContext } from './testing-source-context';

export function testParameterReference(symbol: string):
    TypeParameter<TestingSourceContext> {
  return new TypeParameter(new TestingSourceContext(), symbol);
}
