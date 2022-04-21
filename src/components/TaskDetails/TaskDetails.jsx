import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Button from '../Button/Button'

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Esta é uma descrição da tarefa que pode ser analisada, lida e editada pelo usuário do aplicativo.
                </p>
            </div>
        </>
    )
}

export default TaskDetails
