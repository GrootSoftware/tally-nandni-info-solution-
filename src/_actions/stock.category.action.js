import { status } from "../_constants";
import { stockCategoryServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const stockCategoryAction = {
    getStockCategoryById
};


function getStockCategoryById(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_stock_category_status: status.IN_PROGRESS,
                    stock_category_list: null,
                },
            })
        );

        stockCategoryServices.getStockCategoryById(data).then(
            (response) => {
                if (response.Status === true) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_stock_category_status: status.SUCCESS,
                                stock_category_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_stock_category_status: status.FAILURE,
                                stock_category_list: response,
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
                            get_stock_category_status: status.FAILURE,
                            stock_category_list: error,
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