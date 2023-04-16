import {
  FETCH_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
} from './actionTypes';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const addTaskRequest = (task) => ({
  type: ADD_TASK_REQUEST,
  payload: task,
});

export const deleteTaskRequest = (id) => ({
  type: DELETE_TASK_REQUEST,
  payload: id,
});
