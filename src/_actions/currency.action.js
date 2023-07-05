import { status } from "../_constants";
import { currencyServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const currencyAction = {
    getCurrencyById
};


function getCurrencyById(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_currency_status: status.IN_PROGRESS,
                    currency_list: null,
                },
            })
        );

        currencyServices.getCurrencyById(data).then(
            (response) => {
                if (response.Status === true) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_currency_status: status.SUCCESS,
                                currency_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_currency_status: status.FAILURE,
                                currency_list: response,
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
                            get_currency_status: status.FAILURE,
                            currency_list: error,
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