import { status } from "../_constants";
import { configServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const configeAction = {
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
  getConfigById,
};

function createConfig(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          create_config_status: status.IN_PROGRESS,
          create_config_data: null,
        },
      })
    );
    configServices.createConfig(data).then(
      (response) => {
        if (response.status == 200 || response.status == 201) {
          alert.success("config added suseesfully");

          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                create_config_status: status.SUCCESS,
                create_config_data: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/config/message";
          }, 200);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                create_config_status: status.FAILURE,
                create_config_data: response,
              },
            })
          );
          alert.error("duplicate config key not allowed");
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              create_config_status: status.FAILURE,
              create_config_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getConfigById(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_congig_by_id: status.IN_PROGRESS,
          edit_config: null,
        },
      })
    );
    configServices.getConfigById(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_congig_by_id: status.SUCCESS,
                config_id_list: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_congig_by_id: status.FAILURE,
                config_id_list: response,
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
              get_congig_by_id: status.FAILURE,
              config_id_list: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getConfig(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_config_status: status.IN_PROGRESS,
          get_config_data: null,
        },
      })
    );
    configServices.getConfig(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_config_status: status.SUCCESS,
                get_config_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_config_status: status.FAILURE,
                get_config_data: response,
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
              get_config_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function updateConfig(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_config_status: status.IN_PROGRESS,
          update_config_data: null,
        },
      })
    );
    configServices.updateConfig(data).then(
      (response) => {
        if (response.status == 200) {
          alert.success("config updated suseesfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_config_status: status.SUCCESS,
                update_config_data: response,
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
                update_config_status: status.FAILURE,
                update_config_data: response,
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
              update_config_status: status.FAILURE,
              update_config_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function deleteConfig(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          delete_config_status: status.IN_PROGRESS,
          delete_config_data: null,
        },
      })
    );
    configServices.deleteConfig(id).then(
      (response) => {
        if (response.status == 204) {
          alert.success("config deleted suseesfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                delete_config_status: status.SUCCESS,
                delete_config_data: response,
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
                delete_config_status: status.FAILURE,
                delete_config_data: response,
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
              delete_config_status: status.FAILURE,
              delete_config_data: error,
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
