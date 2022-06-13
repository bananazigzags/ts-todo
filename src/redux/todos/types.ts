export type ActionType = {
  type: string;
  payload: any;
}

export type StateType = {
  todos: TodosType,
  filter: string
}

export type TodosType = {
  [id: string]: {
    name: string,
    isCompleted: boolean,
    isFavorite: boolean,
    isEdited: boolean,
    addDate: string
  }
}

export type TodoPayloadType = {
  id: string;
  name: string;
  completed?: boolean;
  favorite?: boolean,
  addDate?: string
}