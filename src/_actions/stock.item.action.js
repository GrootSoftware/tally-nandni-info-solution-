import { status } from "../_constants";
import { stockItemServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const stockItemAction = {
  getStockItemById
};


function getStockItemById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_stock_item_status: status.IN_PROGRESS,
          stock_item_list: null,
        },
      })
    );

    stockItemServices.getStockItemById(data).then(
      (response) => {

        if (response.Status === true) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_stock_item_status: status.SUCCESS,
                stock_item_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_stock_item_status: status.FAILURE,
                stock_item_list: response,
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
              get_stock_item_status: status.FAILURE,
              stock_item_list: error,
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
