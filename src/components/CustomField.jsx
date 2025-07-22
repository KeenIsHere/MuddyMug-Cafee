import React from 'react'

export default function CustomField({placeholder, value, onChange, type = "text", id, onKeyPress}) {
  return (
    <input 
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      className="custom-field"
    />
  )
}
