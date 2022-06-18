import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED, TOGGLE_EDIT, TOGGLE_FAVORITE } from "./actionTypes";
import { todoReducer } from "./todoReducer"; 
import { TodosType } from "./types";

let testState: TodosType = {};

beforeEach(() => {
  testState = {
    1: {
      name:"delectus aut autem",
      isCompleted: false,
      isFavorite: false,
      isEdited: false,
      addDate: "Fri Jun 17 2022",
    },
    2: {
      name: "quis ut nam facilis et officia qui",
      isCompleted: false,
      isFavorite: false,
      isEdited: false,
      addDate: "Fri Jun 17 2022",
    }
  }
})

describe("todoReducer", () => {
  it("toggles favorite", () => {
    expect(todoReducer(testState, {type: TOGGLE_FAVORITE, payload: 1})).toEqual({
      1: {
        name:"delectus aut autem",
        isCompleted: false,
        isFavorite: true,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      },
      2: {
        name: "quis ut nam facilis et officia qui",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      }
    })
  }) 

  it("toggles edit", () => {
    expect(todoReducer(testState, {type: TOGGLE_EDIT, payload: 1})).toEqual({
      1: {
        name:"delectus aut autem",
        isCompleted: false,
        isFavorite: false,
        isEdited: true,
        addDate: "Fri Jun 17 2022",
      },
      2: {
        name: "quis ut nam facilis et officia qui",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      }
    })
  })

  it("toggles completed", () => {
    expect(todoReducer(testState, {type: TOGGLE_COMPLETED, payload: 1})).toEqual({
      1: {
        name:"delectus aut autem",
        isCompleted: true,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      },
      2: {
        name: "quis ut nam facilis et officia qui",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      }
    })
  })

  it("edits todo", () => {
    expect(todoReducer(testState, {type: EDIT_TODO, payload: {id: 2, name: "quis ut nam facilis et"}})).toEqual({
      1: {
        name:"delectus aut autem",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      },
      2: {
        name: "quis ut nam facilis et",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      }
    })
  })

  it("adds todo", () => {
    expect(todoReducer(testState, {type: ADD_TODO, 
      payload: {name: "walk the dog", id: 12345, addDate: "Sat Jun 18 2022"}})).toEqual({
      1: {
        name:"delectus aut autem",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      },
      2: {
        name: "quis ut nam facilis et officia qui",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      },
      12345: {
        name: "walk the dog",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Sat Jun 18 2022",
      }
    })
  })

  it("deletes todo", () => {
    expect(todoReducer(testState, {type: DELETE_TODO, payload: 1})).toEqual({
      2: {
        name: "quis ut nam facilis et officia qui",
        isCompleted: false,
        isFavorite: false,
        isEdited: false,
        addDate: "Fri Jun 17 2022",
      }
    })
  })
})
