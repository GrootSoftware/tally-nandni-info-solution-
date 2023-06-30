import { status } from "../_constants";
import { groupServices, stockUnitServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const stockUnitAction = {
    getStockUnitById
};


function getStockUnitById(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_stock_unit_status: status.IN_PROGRESS,
                    stock_unit_list: null,
                },
            })
        );

        stockUnitServices.getStockUnitById(data).then(
            (response) => {
                if (response.Status === true) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_stock_unit_status: status.SUCCESS,
                                stock_unit_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_stock_unit_status: status.FAILURE,
                                stock_unit_list: response,
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
                            get_stock_unit_status: status.FAILURE,
                            stock_unit_list: error,
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