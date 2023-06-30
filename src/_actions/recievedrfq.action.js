
import { recievedrfqConstants } from '../_constants';
import { recievedrfqServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const recievedrfqAction = {
    searchRecievedRFQ,
};

function searchRecievedRFQ(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfqConstants.GET_RECIEVED_RFQ_REQUEST,
            data: null
        }));
        recievedrfqServices.searchRecievedRFQ(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfqConstants.GET_RECIEVED_RFQ_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfqConstants.GET_RECIEVED_RFQ_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfqConstants.GET_RECIEVED_RFQ_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function dispatchFunction(data) {
    // if (data.data && data.data.code === 401) {
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