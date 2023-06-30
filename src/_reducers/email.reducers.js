// import { status } from "../_constants";
// import { emailConstants } from "../_constants/email.constant";

export function email(state = {}, action) {
  return {
    ...state,
    ...action.data,
  };
  // switch (action.type) {
  //     case emailConstants.RECENT_COMUNICATION_REQUEST:
  //         return {
  //             ...state,
  //             search_email_status: status.IN_PROGRESS,
  //             searchemail: action.data
  //         }
  //     case emailConstants.RECENT_COMUNICATION_SUCCESS:
  //         return {
  //             ...state,
  //             search_email_status: status.SUCCESS,
  //             searchemail: action.data
  //         }
  //     case emailConstants.RECENT_COMUNICATION_FAILURE:
  //         return {
  //             ...state,
  //             search_email_status: status.FAILURE,
  //             searchemail: null
  //         }
  //     case emailConstants.SEARCH_ALL_EMAILS_REQUEST:
  //         return {
  //             ...state,
  //             search_all_email_status: status.IN_PROGRESS,
  //             searchallemail: action.data
  //         }
  //     case emailConstants.SEARCH_ALL_EMAILS_SUCCESS:
  //         return {
  //             ...state,
  //             search_all_email_status: status.SUCCESS,
  //             searchallemail: action.data
  //         }
  //     case emailConstants.SEARCH_ALL_EMAILS_FAILURE:
  //         return {
  //             ...state,
  //             search_all_email_status: status.FAILURE,
  //             searchallemail: null
  //         }
  //     case emailConstants.SEND_EMAILS_REQUEST:
  //         return {
  //             ...state,
  //             send_email_status: status.IN_PROGRESS,
  //             sendEmailRes: action.data
  //         }
  //     case emailConstants.SEND_EMAILS_SUCCESS:
  //         return {
  //             ...state,
  //             send_email_status: status.SUCCESS,
  //             sendEmailRes: action.data
  //         }
  //     case emailConstants.SEND_EMAILS_FAILURE:
  //         return {
  //             ...state,
  //             send_email_status: status.FAILURE,
  //             sendEmailRes: null
  //         }
  //     case emailConstants.GET_EMAIL_DETAIL_REQUEST:
  //         return {
  //             ...state,
  //             get_email_detail_status: status.IN_PROGRESS,
  //             emaildetail_res: action.data
  //         }
  //     case emailConstants.GET_EMAIL_DETAIL_SUCCESS:
  //         return {
  //             ...state,
  //             get_email_detail_status: status.SUCCESS,
  //             emaildetail_res: action.data
  //         }
  //     case emailConstants.GET_EMAIL_DETAIL_FAILURE:
  //         return {
  //             ...state,
  //             get_email_detail_status: status.FAILURE,
  //             emaildetail_res: null
  //         }
  //     case emailConstants.DELETE_EMAIL_REQUEST:
  //         return {
  //             ...state,
  //             delete_email_status: status.IN_PROGRESS,
  //         }
  //     case emailConstants.DELETE_EMAIL_SUCCESS:
  //         return {
  //             ...state,
  //             delete_email_status: status.SUCCESS,
  //         }
  //     case emailConstants.DELETE_EMAIL_FAILURE:
  //         return {
  //             ...state,
  //             delete_email_status: status.FAILURE,
  //         }
  //     case emailConstants.GET_INBOX_EMAIL_SUCCESS:
  //         return {
  //             ...state,
  //             get_inbox_status: status.SUCCESS,
  //             inbox_data: action.data
  //         }
  //     default:
  //         return state
  // }
}
