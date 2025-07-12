import React from 'react'

function Button({ children,
    type = 'button',
    bgcolor = 'bg-orange-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
    type={type}
    className= {`py-4 px-6 ${bgcolor} ${textColor} ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button