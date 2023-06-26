import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const categoryServices = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getByIdCategory
};
function getAllCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };

  const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
  return fetch(`${apiEndPoint.GET_ALL_CATEGORY}`, requestOptions).then((response) => response.json());
}

function getByIdCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  // let url = '';
  // if (data) {
  //   if (data.id) {
  //     url += `${url ? '&' : '?'}id=${data.id}`
  //   }
  // }
  const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
  return fetch(`${apiEndPoint.GET_BY_ID_CATEGORY}/${data.id}`, requestOptions).then((response) => response.json());
}

function getCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  let url = '';
  if (data) {
    if (data.id) {
      url += `${url ? '&' : '?'}id=${data.id}`
    }
  }
  const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
  return fetch(`${apiEndPoint.CATEGORY}${url}`, requestOptions);
}

function createCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CATEGORY}`, requestOptions)
}

function updateCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("PUT", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CATEGORY}`, requestOptions)
}


function deleteCategory(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CATEGORY}/${data.id}`, requestOptions)
}