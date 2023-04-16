import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { addTaskRequest, fetchTasksRequest } from '../../redux/actions/taskActions';
import './index.css';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(URL.createObjectURL(acceptedFiles[0]));
    },
    accept: 'image/jpeg, image/png, application/pdf, .txt',
    maxFiles: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addTaskRequest({ title, description, file }));
    setTitle('');
    setDescription('');
    setFile(null);
  };

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        type='text'
        placeholder='Task title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Task description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div {...getRootProps()} className='dropzone'>
        <input {...getInputProps()} />
        <p>Drag and drop a file here, or click to select a file</p>
      </div>
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
