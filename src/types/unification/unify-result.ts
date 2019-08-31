import { ParameterRange } from "./parameter-range";
import { AssocList } from "@/functional/collections/assoc-lists/assoc-list";

export enum UnifyResultCase {
  Success,
  Error,
}

type SuccessUnifyResult<SourceContext> = {
  readonly case: UnifyResultCase.Success,
  readonly boundUpdates: AssocList<string, ParameterRange<SourceContext>> | null,
};

type ErrorUnifyResult = {
  readonly case: UnifyResultCase.Error,
};

export type UnifyResult<SourceContext> =
    SuccessUnifyResult<SourceContext> | ErrorUnifyResult;

export function unifySuccess<SourceContext>(): SuccessUnifyResult<SourceContext> {
  return {
    case: UnifyResultCase.Success,
    boundUpdates: null,
  }
}
