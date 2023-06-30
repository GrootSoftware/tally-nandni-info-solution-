import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from '../_utilities';


export const newCommentServices = {
    getNewComments
}

function getNewComments(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, JSON.stringify(data), null);
    return fetch(`${apiEndPoint.COMMENTS}`, requestOptions).then(response => response.json());
};