import { status } from "../_constants";
import {  stockGodownServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const stockGodownAction = {
  getStockGodownById
};


function getStockGodownById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_stock_godown_status: status.IN_PROGRESS,
          stock_godown_list: null,
        },
      })
    );

    stockGodownServices.getStockGodownById(data).then(
      (response) => {
        if (response.Status === true) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_stock_godown_status: status.SUCCESS,
                stock_godown_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_stock_godown_status: status.FAILURE,
                stock_godown_list: response,
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
              get_stock_godown_status: status.FAILURE,
              stock_godown_list: error,
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
