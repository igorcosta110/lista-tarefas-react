import React from 'react';

import TaskItem from './TaskItem'

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => {
                return <TaskItem task={task}/>
            })}
        </>
    )
}

export default Tasks;