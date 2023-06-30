import { departmentConstants, status } from "../_constants";

export function department(state = {}, action) {
  return {
    ...state,
    ...action.data,
  };
  // switch (action.type) {
  //     case departmentConstants.GET_DEPARTMENT_REQUEST:
  //         return {
  //             ...state,
  //             get_department_status: status.IN_PROGRESS,
  //         };
  //     case departmentConstants.GET_DEPARTMENT_SUCCESS:
  //         return {
  //             ...state,
  //             get_department_status: status.SUCCESS,
  //             departmentList: action.data
  //         };
  //     case departmentConstants.GET_DEPARTMENT_FAILURE:
  //         return {
  //             ...state,
  //             get_department_status: status.FAILURE,
  //         };
  //     default:
  //         return state;
  // }
}
