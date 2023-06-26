import { status } from '../_constants';

export function vendor(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}
