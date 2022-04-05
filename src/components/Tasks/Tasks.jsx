import React from 'react';

import TaskItem from '../TaskItem/TaskItem'

const Tasks = ({ tasks, handleTaskClick }) => {
    return (
        <>
            {tasks.map((task) => {
                return <TaskItem task={task} handleTaskClick={handleTaskClick}/>
            })}
        </>
    )
}

export default Tasks;