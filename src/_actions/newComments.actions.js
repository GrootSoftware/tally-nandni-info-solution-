

import { newCommentContants } from '../_constants';
import { newCommentServices } from '../_services/newComments.services';
import { alert, commonFunctions } from '../_utilities';


export const commentActions = {
    getComments
}

function getComments(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: newCommentContants.GET_NEW_COMMENTS_REQUEST,
            data: null
        }))

        newCommentServices.getNewComments(data).then(
            response => {
                if (response.code === 200) {
                    dispatch(dispatchFunction({
                        type: newCommentContants.GET_NEW_COMMENTS_SUCCESS,
                        data: response.object
                    }));
                } else {
                    dispatch(dispatchFunction({
                        type: newCommentContants.POST_NEW_COMMENTS_FAILURE,
                        data: response
                    }));
                    alert.error(response.message);
                }
            },
            error => {
                dispatch(dispatchFunction({
                    type: newCommentContants.POST_NEW_COMMENTS_FAILURE,
                    data: error.message
                }));
                alert.error(error.message);
            }
        );
    }
}

function dispatchFunction(data) {
    // if(data.data && data.data.code === 401){
    //     commonFunctions.onLogout();
    //     return {
    //         type: authConstants.USER_LOGOUT,
    //         data: null
    //     };
    // }
    return {
        type: data.type,
        data: data.data
    };
}