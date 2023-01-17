import TaskItem from './TaskItem.jsx'
const Tasks = ({ tasks, handleTaskClicked, handleRemoveTask}) => {
  return (
    <div>
      {tasks.map((taskItem) => (
      <TaskItem taskItem={taskItem} handleTaskClicked={handleTaskClicked} handleRemoveTask={handleRemoveTask}/>))}
    </div>
    )
}

export default Tasks