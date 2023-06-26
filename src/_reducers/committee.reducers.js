export function committee(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}