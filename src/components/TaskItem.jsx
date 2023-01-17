import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory} from 'react-router-dom'

import './TaskItem.css'
const TaskItem = ({ taskItem, handleTaskClicked, handleRemoveTask}) => {
  
  const history = useHistory()
  
  const handleTaskDetailsClick = () => {
    history.push(`/${taskItem.title}`)
  }
  
  return <div className="task-container" style={taskItem.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
    <div className="task-title" onClick={() => handleTaskClicked(taskItem.id)}>
      {taskItem.title}
    </div>
    <div className="buttons-container">
      <button onClick={handleTaskDetailsClick} className="see-task-button">
      <CgInfo /></button>
      <button onClick={() => handleRemoveTask(taskItem.id)} className="remove-task-button">
      <CgClose /></button>
    </div>
  </div>
}

export default TaskItem