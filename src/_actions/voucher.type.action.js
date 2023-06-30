import { status } from "../_constants";
import { groupServices, voucherTypeServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const voucherTypeAction = {
    getVoucherTypeById
};


function getVoucherTypeById(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_voucher_type_status: status.IN_PROGRESS,
                    voucher_type_list: null,
                },
            })
        );

        voucherTypeServices.getVoucherTypeById(data).then(
            (response) => {
                if (response.Status === true) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_voucher_type_status: status.SUCCESS,
                                voucher_type_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_voucher_type_status: status.FAILURE,
                                voucher_type_list: response,
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
                            get_voucher_type_status: status.FAILURE,
                            voucher_type_list: error,
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