
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";


export const stockGodownServices = {
  getStockGodownById
};

function getStockGodownById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
 const requestOptions = commonFunctions.getRequestOptions("POST",extraHeaders,JSON.stringify(data)
);
console.log(requestOptions)
  return fetch(`${apiEndPoint.STOCK_GODOWN_BY_ID}`, requestOptions).then((response)=>response.json());
}