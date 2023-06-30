import { status } from "../_constants";
import { stockGroupServices } from "../_services";

import { alert, commonFunctions } from "../_utilities";

export const stockGroupAction = {
  getStockGroupById
};


function getStockGroupById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_stock_group_status: status.IN_PROGRESS,
          stock_group_list: null,
        },
      })
    );

    stockGroupServices.getStockGroupById(data).then(
      (response) => {
        if (response.Status === true) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_stock_group_status: status.SUCCESS,
                stock_group_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_stock_group_status: status.FAILURE,
                stock_group_list: response,
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
              get_stock_group_status: status.FAILURE,
              stock_group_list: error,
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
