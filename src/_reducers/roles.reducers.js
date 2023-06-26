import { rolesConstants, status } from '../_constants';

export function roles(state = {}, action) {
    return {
        ...state,
        ...action.data
    }
    switch (action.type) {
        case rolesConstants.ADD_ROLES_REQUEST:
            return {
                ...state,
                add_roles_status: status.IN_PROGRESS,
                addRoles: action.data
            };
        case rolesConstants.ADD_ROLES_SUCCESS:
            return {
                ...state,
                add_roles_status: status.SUCCESS,
                addRoles: action.data
            };
        case rolesConstants.ADD_ROLES_FAILURE:
            return {
                ...state,
                add_roles_status: status.FAILURE,
                addRoles: null
            };
        case rolesConstants.DELETE_ROLES_REQUEST:
            return {
                ...state,
                delete_roles_status: status.IN_PROGRESS,
                deleteRoles: action.data
            };
        case rolesConstants.DELETE_ROLES_SUCCESS:
            return {
                ...state,
                delete_roles_status: status.SUCCESS,
                deleteRoles: action.data
            };
        case rolesConstants.DELETE_ROLES_FAILURE:
            return {
                ...state,
                delete_roles_status: status.FAILURE,
                deleteRoles: null
            };
        case rolesConstants.GET_ROLES_REQUEST:
            return {
                ...state,
                get_roles_status: status.IN_PROGRESS,
                getRoles: action.data
            };
        case rolesConstants.GET_ROLES_SUCCESS:
            return {
                ...state,
                get_roles_status: status.SUCCESS,
                getRoles: action.data
            };
        case rolesConstants.GET_ROLES_FAILURE:
            return {
                ...state,
                get_roles_status: status.FAILURE,
                getRoles: null
            };
        case rolesConstants.SEARCH_ROLES_REQUEST:
            return {
                ...state,
                search_roles_status: status.IN_PROGRESS,
                searchRoles: action.data
            };
        case rolesConstants.SEARCH_ROLES_SUCCESS:
            return {
                ...state,
                search_roles_status: status.SUCCESS,
                searchRoles: action.data
            };
        case rolesConstants.SEARCH_ROLES_FAILURE:
            return {
                ...state,
                search_roles_status: status.FAILURE,
                searchRoles: null
            };
        case rolesConstants.UPDATE_ROLES_REQUEST:
            return {
                ...state,
                update_roles_status: status.IN_PROGRESS,
                updateRoles: action.data
            };
        case rolesConstants.UPDATE_ROLES_SUCCESS:
            return {
                ...state,
                update_croles_status: status.SUCCESS,
                updateRoles: action.data
            };
        case rolesConstants.UPDATE_ROLES_FAILURE:
            return {
                ...state,
                update_roles_status: status.FAILURE,
                updateRoles: null
            };
        default:
            return state;
    }
}
