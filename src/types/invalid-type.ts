import { BuiltinSourceContext } from "./builtin-source-context";

export class InvalidType {
  sourceContext = new BuiltinSourceContext();
};

export const INVALID_TYPE = new InvalidType();
