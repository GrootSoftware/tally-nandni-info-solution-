
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";


export const stockGroupServices = {
  getStockGroupById
};

function getStockGroupById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
 const requestOptions = commonFunctions.getRequestOptions("POST",extraHeaders,JSON.stringify(data)
);
console.log(requestOptions)
  return fetch(`${apiEndPoint.STOCK_GROUP_BY_ID}`, requestOptions).then((response)=>response.json());
}