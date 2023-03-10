import { useParams, useHistory } from 'react-router-dom'

import Button from './Button.jsx'

import './TaskDetails.css'

const TaskDetails = () => {
  
  const params = useParams()
  const history = useHistory()
  
  const handleBackButtonClick = () => {
    history.goBack()
  }
  
  return(
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun loren ipsun</p>
        
      </div>
    </>
    
    )
}

export default TaskDetails