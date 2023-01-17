
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

//components
import Tasks from './components/Tasks.jsx'
import TaskItem from './components/TaskItem.jsx'
import AddTask from './components/AddTask.jsx'
import Header from './components/Header.jsx'
import TaskDetails from './components/TaskDetails.jsx'

import './App.css'
const App = () => {
  const[tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar desenvolvimento',
      completed: false
    },
    {
      id: 2,
      title: 'Ler livro',
      completed: true
    }])
    
    useEffect(() => {		
      const fetchTasks = async () => {
        const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10"); 			
        setTasks(data);		}; 		
        fetchTasks();	}, []);
        
    const handleTaskClicked = (taskId) => {
      const newTasks = tasks.map((taskItem) => {
        if (taskItem.id === taskId) return {...taskItem, completed: !taskItem.completed}
        return taskItem
        
      })
      setTasks(newTasks)
    }
    
    const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }]
      setTasks(newTasks)
    }
    
    const handleRemoveTask = (taskId) => {
      const newTasks = tasks.filter(taskItem=> taskItem.id !== taskId )
      setTasks(newTasks)
    }
    
  return (
    <Router>
     <div className="container">
       <Header />
       <Route path="/" exact render={() => (
       <>
         <AddTask handleTaskAddition={handleTaskAddition} />
         <Tasks tasks={tasks}
         handleTaskClicked={handleTaskClicked} handleRemoveTask={handleRemoveTask}/>
       </>
       )}/>
       <Route path="/:taskTitle" exact component={TaskDetails}/>
       
     </div>
    </Router>
    
    )
}

export default App