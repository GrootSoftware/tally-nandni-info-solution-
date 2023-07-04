import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";


export const companyServices = {
  getCompany,
  getCompanyById
};

function getCompany(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "POST",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.COMPANY}`, requestOptions).then(
    (response) => response.json()
  );
}

function getCompanyById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
 const requestOptions = commonFunctions.getRequestOptions("POST",extraHeaders,JSON.stringify(data)
);
  return fetch(`${apiEndPoint.COMPANY_BY_ID}`, requestOptions).then((response)=>response.json());
}