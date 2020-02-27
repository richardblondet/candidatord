import IState, { initialState } from './initialState';
import * as types from '../actions/types';

export interface IAction {
  type: string,
  payload: any
};

interface IHandlers {
  [index:string]:Function
}
/**
 * Manage the state actions for the application store context
 * 
 * @param state @interface State
 * @param action @interface Action
 */
const initReducers = (handlers:IHandlers) => (state: IState = initialState, action: IAction): IState => {
  
  /** Simple log for our reducer */
  console.log("%c Reducer Action: %s", "font-weight: bold; color: #6B5ADF;", action.type.toUpperCase(), action.payload );
  
  if ( !handlers.hasOwnProperty(action.type) ){
    return state;
  }
  
  
  return handlers[action.type](state, action);
};

const Reducer = initReducers({
  [types.SET_SEARCH_TERM]: (state:IState, { payload }: { payload:any }) => ({ 
    ...state, 
    searchBox: { 
      ...state.searchBox,
      term: payload.term 
    }
  }),
  [types.SET_SEARCH_BOX_STATE]: (state:IState, { payload }: { payload:any }) => ({ 
    ...state, 
    searchBox: { 
      ...state.searchBox,
      state: payload.state 
    }
  })
});

export {
  Reducer,
  initialState
};