export function recievedrfp(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}
