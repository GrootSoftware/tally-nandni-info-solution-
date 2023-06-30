import config from "../config";
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const sliderServices = {
  getSlider,
  createSlider,
  updateSlider,
  deleteSlider
};

function getSlider() {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.SLIDRER}`, requestOptions).then(
    (response) => response.json()
  );
}

function createSlider(data) {
  const formData = new FormData();
  if (data.sliderImage) {

    for (let i = 0; i < data.sliderImage.length; i++) {
      formData.append("sliderImage", data.sliderImage[i]);
    }

  }
  const requestOptions = commonFunctions.getRequestOptions("POST", {}, formData);
  return fetch(`${apiEndPoint.SLIDRER}`, requestOptions);
}

function updateSlider(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.SLIDRER}/${data.id}`, requestOptions).then(response => response.json());
}


function deleteSlider(data) {
  const extraHeaders = {
    "Content-Type": "application/json"
  };
  const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, JSON.stringify(data));
  return fetch(`${apiEndPoint.SLIDRER}/${data.id}`, requestOptions);
}