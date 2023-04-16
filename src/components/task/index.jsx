import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskRequest } from '../../redux/actions/taskActions';
import './index.css'

const Task = ({ task, deleteTask }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTaskRequest(id));
  };
  return (
    <div className='task'>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.file && <a href={task.file} className='dropzone' download>Download Attached File</a>}
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;