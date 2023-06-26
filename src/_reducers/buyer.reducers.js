export function buyer(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}
