import { TOGGLE_FILTER } from "./actionTypes";
import { toggleFilterType } from "./types";

export const initialState: string = ''

export const filterReducer = (state: string = initialState, action: toggleFilterType) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.payload === state ? "" : action.payload
    default:
      return state;
  }
}