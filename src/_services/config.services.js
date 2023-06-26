import config from "../config";
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const configServices = {
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
  getConfigById
};

function getConfig(data) {
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
  return fetch(`${apiEndPoint.CONFIG_MESSAGE}${url}`, requestOptions).then(
    (response) => response.json()
  );
}

function createConfig(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CONFIG_MESSAGE }`, requestOptions);
}

function updateConfig(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  
 const requestOptions = commonFunctions.getRequestOptions("PUT", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CONFIG_MESSAGE}`, requestOptions);
}


function deleteConfig(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.CONFIG_MESSAGE}/${data.id}`, requestOptions);
}


function getConfigById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions('GET', extraHeaders, null);
  return fetch(`${apiEndPoint.CONFIG_MESSAGE}/${data.id}`, requestOptions).then((response)=>response.json());
}