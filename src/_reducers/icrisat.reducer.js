
export function icrisat(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
}