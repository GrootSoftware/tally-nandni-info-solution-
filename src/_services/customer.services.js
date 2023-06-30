import config from "../config";
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const customerServices = {
  getCustomer,
  updateCustomer,
  deleteCustomer,
};

function getCustomer(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  let url = '';
  if (data) {
    if (data.id) {
      url += `${url ? '&' : '?'}id=${data.id}`
    }
  }
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.CUSTOMER}${url}`, requestOptions).then(
    (response) => response.json()
  );
}


function updateCustomer(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  
 const requestOptions = commonFunctions.getRequestOptions("PUT", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CUSTOMER}`, requestOptions);
}


function deleteCustomer(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CUSTOMER}/${data.id}`, requestOptions);
}


