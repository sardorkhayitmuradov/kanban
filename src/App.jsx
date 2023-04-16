import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest } from './redux/actions/taskActions';
import TaskForm from './components/taskForm';
import Task from './components/task';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  return (
    <div className='App'>
      <div className='container'>
        <TaskForm />
        <div>
          {tasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
