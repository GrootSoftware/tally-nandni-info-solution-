import { newCommentContants, status } from '../_constants';

let initialState = {};

export function Comments(state = initialState, action) {
    switch (action.type) {
        case newCommentContants.GET_NEW_COMMENTS_REQUEST:
            return {
                ...state,
                get_comments_status: status.IN_PROGRESS,
                getComments: action.data
            }
        case newCommentContants.GET_NEW_COMMENTS_SUCCESS:
            return {
                ...state,
                get_comments_status: status.SUCCESS,
                getComments: action.data
            }
        case newCommentContants.GET_NEW_COMMENTS_FAILURE:
            return {
                ...state,
                get_comments_status: status.FAILURE,
                getComments: null
            }
        default:
            return state;
    }

}