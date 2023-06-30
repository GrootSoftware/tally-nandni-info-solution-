import { status } from "../_constants";
import { groupServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const groupAction = {
    getGroupById
};


function getGroupById(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_group_status: status.IN_PROGRESS,
                    group_list: null,
                },
            })
        );

        groupServices.getGroupById(data).then(
            (response) => {
                if (response.Status === true) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_group_status: status.SUCCESS,
                                group_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_group_status: status.FAILURE,
                                group_list: response,
                            },
                        })
                    );
                    alert.error(response.Message);
                }
            },
            (error) => {
                dispatch(
                    dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            get_group_status: status.FAILURE,
                            group_list: error,
                        },
                    })
                );
                alert.error(error);
            }
        );
    };
}

function dispatchFunction(data) {
    return {
        type: data.type,
        data: data.data,
    };
}