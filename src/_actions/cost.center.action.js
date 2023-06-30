import { status } from "../_constants";
import {  costCenterServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const costCenterAction = {
  getCostCenterById
};


function getCostCenterById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_cost_center_id_status: status.IN_PROGRESS,
          cost_center_id_list: null,
        },
      })
    );

    costCenterServices.getCostCenterById(data).then(
      (response) => {
        if (response.Status === true) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_cost_center_id_status: status.SUCCESS,
                cost_center_id_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_cost_center_id_status: status.FAILURE,
                cost_center_id_list: response,
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
              get_cost_center_id_status: status.FAILURE,
              cost_center_id_list: error,
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
