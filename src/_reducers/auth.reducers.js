import { authConstants, status } from '../_constants';
// import { localStorageEnc } from '../_utilities';

let user = localStorage.getItem('userData');
let initialState = {};
// if (user) {
//     user = JSON.parse(user);
//     initialState = {
//         user_login_status: status.SUCCESS,
//         user
//     };
// }

export function auth(state = initialState, action) {
    return {
        ...state,
        ...action.data
    }
}