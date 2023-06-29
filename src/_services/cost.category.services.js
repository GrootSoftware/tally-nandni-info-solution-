
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";


export const costCategoryServices = {
  getCostCategoryById
};

function getCostCategoryById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
 const requestOptions = commonFunctions.getRequestOptions("POST",extraHeaders,JSON.stringify(data)
);
console.log(requestOptions)
  return fetch(`${apiEndPoint.COST_CATEGORY_BY_ID}`, requestOptions).then((response)=>response.json());
}