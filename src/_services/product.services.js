import config from "../config";
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const productServices = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getByIdProduct,
};

function getProduct(data) {
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
  return fetch(`${apiEndPoint.PRODUCT}${url}`, requestOptions).then(response => response.json());
}

function createProduct(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  console.log("config ::::", data)
  const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.PRODUCT}`, requestOptions).then(response => response.json());
}
function getByIdProduct(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  // console.log("config ::::", data)
  const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.PRODUCT}/${data.id}`, requestOptions).then(response => response.json());
}
function updateProduct(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("PUT", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.PRODUCT}`, requestOptions);
}


function deleteProduct(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.PRODUCT}/${data.id}`, requestOptions).then(response => response.json());
}