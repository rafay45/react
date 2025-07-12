import React, {useId} from 'react'

function Select({
    label,
    className = "",
    ...props
},ref) {
    const id = useId()
  return (
    <div>
        {label && (<label className= {className} htmlFor={id}>{label}</label>)}
        <select
         id={id}>
          {options?.map((option) => {
            <option key={option} value={option}>{option}</option>
          })}
         </select>
    </div>
  )
}

export default Select