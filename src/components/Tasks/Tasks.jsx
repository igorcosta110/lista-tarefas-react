import React from 'react';

import TaskItem from '../TaskItem/TaskItem'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (
                 <TaskItem 
                    task={task} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </>
    )
}

export default Tasks;