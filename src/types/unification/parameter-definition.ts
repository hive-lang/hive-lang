import { BuiltinSourceContext } from '@/types/builtin-source-context';
import { ParameterId } from './parameter-id';

export type ParameterDefinition<SourceContext extends BuiltinSourceContext> = {
  parameterId: ParameterId;
};
