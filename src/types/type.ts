import {FiniteType} from './finite-type';

export type Type<SourceContext> = FiniteType<SourceContext> & {sourceContext: SourceContext};
