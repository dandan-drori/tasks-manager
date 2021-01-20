import { combineReducers } from 'redux';

const tasks = (state = { tasksData: [
  {header: "header", content: "content"}, {header: "header2", content: "content2"}
]  }, { type, payload }) => {
  switch (type) {
    case 'SET_TASK_HEADER':
      return { ...state, header: payload }
    case 'SET_TASK_CONTENT':
      return {...state, content: payload }
    default:
      return state
  }
}
const reducer = combineReducers({ tasks })

export default reducer
