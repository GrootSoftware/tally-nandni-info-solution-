import { status } from "../_constants";
import {   ledgerServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const lederAction = {
  getLederById
};


function getLederById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_leder_status: status.IN_PROGRESS,
          ledger_list: null,
        },
      })
    );

    ledgerServices.getLedgerById(data).then(
      (response) => {
        if (response.Status === true) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_leder_status: status.SUCCESS,
                ledger_list: response,
              },
            })
          );
          alert.success(response.Message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_leder_status: status.FAILURE,
                ledger_list: response,
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
              get_leder_status: status.FAILURE,
              ledger_list: error,
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
