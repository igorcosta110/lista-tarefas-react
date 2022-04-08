import React from 'react'
import { useParams } from 'react-router-dom'

import Button from '../Button/Button'

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    
    console.log(params);
    
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
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
