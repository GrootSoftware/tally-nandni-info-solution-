import { status } from "../_constants";
import { categoryServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const categoryAction = {
  getCategory,
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getByIdCategory,
};

function createCategory(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          create_category_status: status.IN_PROGRESS,
          create_category_data: null,
        },
      })
    );
    categoryServices.createCategory(data).then(
      (response) => {
        if (response.status == 200) {
          alert.success("category added suseesfully")
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                create_category_status: status.SUCCESS,
                create_category_data: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/category";
          }, 1000)
        } else {
            alert.error("unexpected error");
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                create_category_status: status.FAILURE,
                create_category_data: response,
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
              create_category_status: status.FAILURE,
              create_category_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getByIdCategory(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_category_status: status.IN_PROGRESS,
          get_category_data: null,
        },
      })
    );
    categoryServices.getByIdCategory(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_category_status: status.SUCCESS,
                get_category_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_category_status: status.FAILURE,
                get_category_data: response,
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
              get_category_status: status.FAILURE,
              get_category_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getAllCategory(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_category_status: status.IN_PROGRESS,
          get_category_data: null,
        },
      })
    );
    categoryServices.getAllCategory(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_category_status: status.SUCCESS,
                get_category_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_category_status: status.FAILURE,
                get_category_data: response,
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
              get_category_status: status.FAILURE,
              get_category_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getCategory(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_category_status: status.IN_PROGRESS,
          get_category_data: null,
        },
      })
    );
    categoryServices.getCategory(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_category_status: status.SUCCESS,
                get_category_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_category_status: status.FAILURE,
                get_category_data: response,
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
              get_category_status: status.FAILURE,
              get_category_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function updateCategory(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_category_status: status.IN_PROGRESS,
          update_category_data: null,
        },
      })
    );
    categoryServices.updateCategory(data).then(
      (response) => {
        if (response.status == 200) {
          alert.success("category updated successfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_category_status: status.SUCCESS,
                update_category_data: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/category";
          }, 1000)
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                update_category_status: status.FAILURE,
                update_category_data: response,
              },
            })
          );
          alert.error("unexpected error");
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              update_category_status: status.FAILURE,
              update_category_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function deleteCategory(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_category_status: status.IN_PROGRESS,
          delete_category_data: null,
        },
      })
    );
    categoryServices.deleteCategory(id).then(
      (response) => {
        if (response.status==204) {
          alert.success("category deleted successfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_category_status: status.SUCCESS,
                delete_category_data: response,
              },
            })
          );
          setTimeout(() => {
            window.location.href = "/postlogin/category";
          }, 1000)
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                update_category_status: status.FAILURE,
                delete_category_data: response,
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
              update_category_status: status.FAILURE,
              delete_category_data: error,
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
