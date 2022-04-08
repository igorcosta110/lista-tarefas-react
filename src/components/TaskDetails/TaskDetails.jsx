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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero voluptates dignissimos delectus natus voluptatem accusamus inventore, eaque culpa, nulla ipsa a numquam? Nam, amet error eligendi cupiditate magni quisquam.
                </p>
            </div>
        </>
    )
}

export default TaskDetails
