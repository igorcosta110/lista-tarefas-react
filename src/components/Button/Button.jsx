import React from 'react'

import './Button.css'

const Button = ({ children, onClick }) => {
    return (
        <button className="add-button button" onClick={onClick}>
            { children }
        </button>
    )
}

export default Button;