let initialState = {};
export function budget(state = initialState, action) {
    return {
        ...state,
        ...action.data
    }
}