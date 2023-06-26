import { status } from "../_constants";

export function invoice(state = {}, action) {
  return {
    ...state,
    ...action.data,
  };
  // switch (action.type) {
  //     case invoiceConstants.ADD_INVOICE_REQUEST:
  //         return {
  //             ...state,
  //             add_invoice_status: status.IN_PROGRESS,
  //             addInvoice: action.data
  //         };
  //     case invoiceConstants.ADD_INVOICE_SUCCESS:
  //         return {
  //             ...state,
  //             add_invoice_status: status.SUCCESS,
  //             addInvoice: action.data
  //         };
  //     case invoiceConstants.ADD_INVOICE_FAILURE:
  //         return {
  //             ...state,
  //             add_invoice_status: status.FAILURE,
  //             addInvoice: null
  //         };
  //     case invoiceConstants.DELETE_INVOICE_REQUEST:
  //         return {
  //             ...state,
  //             delete_invoice_status: status.IN_PROGRESS,
  //             deleteInvoice: action.data
  //         };
  //     case invoiceConstants.DELETE_INVOICE_SUCCESS:
  //         return {
  //             ...state,
  //             delete_invoice_status: status.SUCCESS,
  //             deleteInvoice: action.data
  //         };
  //     case invoiceConstants.DELETE_INVOICE_FAILURE:
  //         return {
  //             ...state,
  //             delete_invoice_status: status.FAILURE,
  //             deleteInvoice: null
  //         };
  //     case invoiceConstants.GET_INVOICE_REQUEST:
  //         return {
  //             ...state,
  //             get_invoice_status: status.IN_PROGRESS,
  //             getinvoicedata: action.data
  //         };
  //     case invoiceConstants.GET_INVOICE_SUCCESS:
  //         return {
  //             ...state,
  //             get_invoice_status: status.SUCCESS,
  //             getinvoicedata: action.data
  //         };
  //     case invoiceConstants.GET_INVOICE_FAILURE:
  //         return {
  //             ...state,
  //             get_invoice_status: status.FAILURE,
  //             getinvoicedata: null
  //         };
  //     case invoiceConstants.SEARCH_INVOICE_REQUEST:
  //         return {
  //             ...state,
  //             search_invoice_status: status.IN_PROGRESS,
  //             searchInvoice: action.data
  //         };
  //     case invoiceConstants.SEARCH_INVOICE_SUCCESS:
  //         return {
  //             ...state,
  //             search_invoice_status: status.SUCCESS,
  //             searchInvoice: action.data
  //         };
  //     case invoiceConstants.SEARCH_INVOICE_FAILURE:
  //         return {
  //             ...state,
  //             search_invoice_status: status.FAILURE,
  //             searchInvoice: null
  //         };
  //     case invoiceConstants.UPDATE_INVOICE_REQUEST:
  //         return {
  //             ...state,
  //             update_invoice_status: status.IN_PROGRESS,
  //             updateInvoice: action.data
  //         };
  //     case invoiceConstants.UPDATE_INVOICE_SUCCESS:
  //         return {
  //             ...state,
  //             update_invoice_status: status.SUCCESS,
  //             updateInvoice: action.data
  //         };
  //     case invoiceConstants.UPDATE_INVOICE_FAILURE:
  //         return {
  //             ...state,
  //             update_invoice_status: status.FAILURE,
  //             updateInvoice: null
  //         };
  //     case invoiceConstants.GET_NEW_INVOICE_REQUEST:
  //         return {
  //             get_new_invoice_status: status.IN_PROGRESS,
  //             newInvoiceData: action.data
  //         };
  //     case invoiceConstants.GET_NEW_INVOICE_SUCCESS:
  //         return {
  //             get_new_invoice_status: status.SUCCESS,
  //             newInvoiceData: action.data
  //         };
  //     case invoiceConstants.GET_NEW_INVOICE_FAILUER:
  //         return {
  //             get_new_invoice_status: status.FAILURE,
  //             newInvoiceData: null
  //         }
  //     default:
  //         return state;
  // }
}
