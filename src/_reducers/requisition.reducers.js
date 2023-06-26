import { requisitionConstants, status } from '../_constants';

export function requisition(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}
