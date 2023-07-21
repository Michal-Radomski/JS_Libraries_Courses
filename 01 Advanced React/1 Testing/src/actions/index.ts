import { SAVE_COMMENT } from "actions/types";

export function saveComment(comment: string) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
