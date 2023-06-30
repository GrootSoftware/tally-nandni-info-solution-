import { reportConstants, status } from "../_constants";

export function reports(state = {}, action) {
    return {
        ...state,
        ...action.data,
    }
}