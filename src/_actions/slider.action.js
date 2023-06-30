import { status } from "../_constants";
import { configServices, sliderServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const sliderAction = {
  getSlider,
  createSlider,
  updateSlider,
  deleteSlider
};


function createSlider(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          create_slider_status: status.IN_PROGRESS,
          create_slider_data: null,
        },
      })
    );
    sliderServices.createSlider(data).then(
      (response) => {
        console.log(response)
        if (response.status==200) {
          alert.success("slider added suseesfully")
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                create_slider_status: status.SUCCESS,
                create_slider_data: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/slider";
          }, 2000)
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                create_slider_status: status.FAILURE,
                create_slider_data: response,
              },
            })
          );
          alert.error("max min 4 file  upload");
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              create_slider_status: status.FAILURE,
              create_slider_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}


function getSlider(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_slider_status: status.IN_PROGRESS,
          get_slider_data: null,
        },
      })
    );
    sliderServices.getSlider(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_slider_status: status.SUCCESS,
                get_slider_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_slider_status: status.FAILURE,
                get_slider_data: response,
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
              get_slider_status: status.FAILURE,
              get_slider_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function updateSlider(data) {
  return dispatch => {
    dispatch(dispatchFunction({
      type: status.IN_PROGRESS,
      data: {
        update_config_status: status.IN_PROGRESS,
        update_config_data: null
      }
    }));
    configServices.updateConfig(data)
      .then(
        response => {
          if (response) {
            dispatch(dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_config_status: status.SUCCESS,
                update_config_data: response
              }
            }));
            alert.success(response.message);
          } else {
            dispatch(dispatchFunction({
              type: status.FAILURE,
              data: {
                update_config_status: status.FAILURE,
                update_config_data: response
              }
            }));
            alert.error(response.message);
          }
        },
        error => {
          dispatch(dispatchFunction({
            type: status.FAILURE,
            data: {
              update_config_status: status.FAILURE,
              update_config_data: error.message
            }
          }));
          alert.error(error.message);
        }
      );
  };
}


function deleteSlider(id) {
  return dispatch => {
    dispatch(dispatchFunction({
      type: status.IN_PROGRESS,
      data: {
        delete_slider_status: status.IN_PROGRESS,
        delete_slider_data: null
      }
    }));
    sliderServices.deleteSlider(id)
      .then(
        response => {
          if (response.status==204) {
            alert.success("slider deleted suseesfully")
            dispatch(dispatchFunction({
              type: status.SUCCESS,
              data: {
                delete_slider_status: status.SUCCESS,
                delete_slider_data: response
              }
            }));
            setTimeout(() => {
              window.location.href="/postlogin/slider"
            }, 1000)
          } else {
            dispatch(dispatchFunction({
              type: status.FAILURE,
              data: {
                delete_slider_status: status.FAILURE,
                delete_slider_data: response
              }
            }));
            alert.error(response);
          }
        },
        error => {
          dispatch(dispatchFunction({
            type: status.FAILURE,
            data: {
              delete_slider_status: status.FAILURE,
              delete_slider_data: error
            }
          }));
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
