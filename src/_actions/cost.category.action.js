import { status } from "../_constants";
import { costCategoryServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const costCategoryAction = {
  getCostCategoryById
};


function getCostCategoryById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_cost_category_id_status: status.IN_PROGRESS,
          cost_category_id_list: null,
        },
      })
    );
    
    costCategoryServices.getCostCategoryById(data).then(
      (response) => {
        if (response.Status===true) {
          console.log("cost:::::::::::",response)
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_cost_category_id_status: status.SUCCESS,
                cost_category_id_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_cost_category_id_status: status.FAILURE,
                cost_category_id_list: response,
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
              get_cost_category_id_status: status.FAILURE,
              cost_category_id_list: error,
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
