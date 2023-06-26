import { status } from "../_constants";
import { customerServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const customerAction = {
  getCustomer,
  updateCustomer,
  deleteCustomer,
  
};

function getCustomer(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_config_status: status.IN_PROGRESS,
          get_customer_list: null,
        },
      })
    );
    customerServices.getCustomer(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_config_status: status.SUCCESS,
                get_customer_list: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_config_status: status.FAILURE,
                get_customer_list: response,
              },
            })
          );
          alert.error(response);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              get_config_status: status.FAILURE,
              get_customer_list: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function updateCustomer(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_customer_status: status.IN_PROGRESS,
          update_customer_list: null,
        },
      })
    );
    customerServices.updateCustomer(data).then(
      (response) => {
        if (response.status == 200) {
          alert.success("config updated suseesfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_customer_status: status.SUCCESS,
                update_customer_list: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/config/message";
          }, 2000);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                update_customer_status: status.FAILURE,
                update_customer_list: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              update_customer_status: status.FAILURE,
              update_customer_list: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function deleteCustomer(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          delete_customer_status: status.IN_PROGRESS,
          delete_poc: null,
        },
      })
    );
    customerServices.deleteCustomer(id).then(
      (response) => {
        if (response.status == 204) {
          alert.success("config deleted suseesfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                delete_customer_status: status.SUCCESS,
                delete_poc: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/config/message";
          }, 1000);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                delete_customer_status: status.FAILURE,
                delete_poc: response,
              },
            })
          );
          alert.error(response);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              delete_customer_status: status.FAILURE,
              delete_poc: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function dispatchFunction(data) {
  // if (data.data && data.data.code === 401) {
  //     commonFunctions.onLogout();
  //     return {
  //         type: authConstants.USER_LOGOUT,
  //         data: null
  //     };
  // }
  return {
    type: data.type,
    data: data.data,
  };
}
