import { kanbanConstants, status } from "../_constants";

export function kanban(state = {}, action) {
  return {
    ...state,
    ...action.data,
  };
  // switch (action.type) {
  //     case kanbanConstants.FETCH_KANBAN_REQUEST:
  //         return {
  //             ...state,
  //             fetch_kanban_status: status.IN_PROGRESS,
  //             kanban_list: action.data
  //         };
  //     case kanbanConstants.FETCH_KANBAN_SUCCESS:
  //         return {
  //             ...state,
  //             fetch_kanban_status: status.SUCCESS,
  //             kanban_list: action.data
  //         };
  //     case kanbanConstants.FETCH_KANBAN_FAILURE:
  //         return {
  //             ...state,
  //             fetch_kanban_status: status.FAILURE,
  //             kanban_list: action.data
  //         };
  //     default:
  //         return state;
  // }
}
