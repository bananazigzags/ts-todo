import { TOGGLE_FILTER } from "./actionTypes"

export const toggleFilter = (filter: string) => {
  return {
    type: TOGGLE_FILTER,
    payload: filter
  }
}