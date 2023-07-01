import { status } from "../_constants";
import { companyServices } from "../_services/company.services";

import { alert, commonFunctions } from "../_utilities";

export const companyAction = {
    getCompany,
    getCompanyById,
};


function getCompanyById(data) {

    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_company_id_status: status.IN_PROGRESS,
                    get_company: null,
                },
            })
        );

        companyServices.getCompanyById(data).then(
            (response) => {
                if (response) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_company_id_status: status.SUCCESS,
                                company_id_list: response,
                            },
                        })
                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_company_id_status: status.FAILURE,
                                company_id_list: response,
                            },
                        })
                    );
                    alert.error(response.Message);
                }
            },
            (error) => {
                dispatch(
                    dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            get_company_id_status: status.FAILURE,
                            company_id_list: error,
                        },
                    })
                );
                alert.error(error);
            }
        );
    };
}

function getCompany(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    get_company_status: status.IN_PROGRESS,
                    get_company_data: null,
                },
            })
        );
        companyServices.getCompany(data).then(
            (response) => {
                if (response) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_company_status: status.SUCCESS,
                                get_company_data: response,
                            },
                        })

                    );
                    // alert.success(response.Message);
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_company_status: status.FAILURE,
                                get_company_data: response,
                            },
                        })
                    );
                    alert.error(response.Message);
                }
            },
            (error) => {
                dispatch(
                    dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            get_company_status: status.FAILURE,
                            get_company_data: error,
                        },
                    })
                );
                alert.error(error);
            }
        );
    };
}


function dispatchFunction(data) {
    return {
        type: data.type,
        data: data.data,
    };
}