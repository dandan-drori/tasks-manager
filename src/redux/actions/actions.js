export const setTaskHeader = taskHeader => {
  return { type: 'SET_TASK_HEADER', payload: taskHeader }
}

export const setTaskContent = taskContent => {
  return { type: 'SET_TASK_CONTENT', payload: taskContent }
}
