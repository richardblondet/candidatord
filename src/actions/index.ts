import * as types from './types';

/**
 * Sets the search term to the machine state
 * @param searchTerm string
 */
export const setSearchTerm = (term:string) => ({ type: types.SET_SEARCH_TERM, payload: { term }})

/**
 * Sets the search box state to the machine state
 * @param searchBoxState string
 */
export const setSearchBoxState = (state:string) => ({ type: types.SET_SEARCH_BOX_STATE, payload: { state }});