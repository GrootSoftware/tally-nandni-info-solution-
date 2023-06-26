export function contact(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}