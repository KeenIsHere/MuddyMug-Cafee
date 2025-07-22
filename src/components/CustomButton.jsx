import React from 'react'

export default function CustomButton({name, onPress, disabled = false}) {
  return (
    <button 
      className={`custom-button ${disabled ? 'disabled' : ''}`}
      onClick={onPress}
      disabled={disabled}
    >
      {name}
    </button>
  )
}
