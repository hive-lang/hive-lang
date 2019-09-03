import { BuiltinSourceContext } from './builtin-source-context';

export class AnythingType {
  sourceContext = new BuiltinSourceContext();
};

export const ANYTHING_TYPE = new AnythingType();
