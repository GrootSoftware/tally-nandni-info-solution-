import { status } from "../_constants";
import { configServices, productServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const productAction = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getByIdProduct,
};

function getByIdProduct(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_Product_status: status.IN_PROGRESS,
          get_Product_data: null,
        },
      })
    );
    productServices.getByIdProduct(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_Product_status: status.SUCCESS,
                get_Product_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_Product_status: status.FAILURE,
                get_Product_data: response,
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
              get_Product_status: status.FAILURE,
              get_Product_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}
function createProduct(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          create_product_status: status.IN_PROGRESS,
          create_product_data: null,
        },
      })
    );
    productServices.createProduct(data).then(
      (response) => {
        if (response.status == 200) {
          window.location.href = "/postlogin/product";
          alert.success("Product Added Successfully");
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                create_product_status: status.SUCCESS,
                create_product_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                create_product_status: status.FAILURE,
                create_product_data: response,
              },
            })
          );
          alert.error("Unexpected Error");
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              create_product_status: status.FAILURE,
              create_product_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function getProduct(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_product_status: status.IN_PROGRESS,
          get_product_data: null,
        },
      })
    );
    productServices.getProduct(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_product_status: status.SUCCESS,
                get_product_data: response,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_product_status: status.FAILURE,
                get_product_data: response,
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
              get_product_status: status.FAILURE,
              get_product_data: error,
            },
          })
        );
        alert.error(error);
      }
    );
  };
}

function updateProduct(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_product_status: status.IN_PROGRESS,
          update_product_data: null,
        },
      })
    );
    productServices.updateProduct(data).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_product_status: status.SUCCESS,
                update_product_data: response,
              },
            })
          );
          alert.success(response.message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                update_product_status: status.FAILURE,
                update_product_data: response,
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
              update_product_status: status.FAILURE,
              update_product_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function deleteProduct(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          delete_product_status: status.IN_PROGRESS,
          delete_product_data: null,
        },
      })
    );
    productServices.deleteProduct(id).then(
      (response) => {
        if (response) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                delete_product_status: status.SUCCESS,
                delete_product_data: response,
              },
            })
          );
          alert.success(response.message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                delete_product_status: status.FAILURE,
                delete_product_data: response,
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
              delete_product_status: status.FAILURE,
              delete_product_data: error,
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
