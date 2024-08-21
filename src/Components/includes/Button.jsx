import React from 'react'
function Button({ text, className }) {
    return (
        <button className={`bg-blue-500 text-white-500 px-4 py-2 rounded-md ${className}`}>
            {text}
        </button>
    )
}
export default Button