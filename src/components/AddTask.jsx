import { useState } from 'react'
import Button from './Button.jsx'
import './AddTask.css'
const AddTask = ({ handleTaskAddition }) => {
  
  const[inputData, setInputData] = useState('')
  
  const handleInputData = (e) => {
    setInputData(e.target.value)
  }
  
  const handleTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }
  
  return (
    <div className="add-task-container">
      <input 
      value={inputData}
      onChange={handleInputData} 
      className="add-task-input" type="text"/>
    <div className="button-container">
      <Button onClick={handleTaskClick}>Adicionar</Button>
    </div>
    </div>
    )
    
}

export default AddTask