
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";


export const stockUnitServices = {
  getStockUnitById
};

function getStockUnitById(data) {
  const extraHeaders = {
      "Content-Type": "application/json"
  };
 const requestOptions = commonFunctions.getRequestOptions("POST",extraHeaders,JSON.stringify(data)
);
  return fetch(`${apiEndPoint.STOCK_UNIT_BY_ID}`, requestOptions).then((response)=>response.json());
}