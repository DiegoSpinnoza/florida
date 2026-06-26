import React from 'react'

export function Input({ label, error, className = '', id, ...props }) {
  const inputId = id || props.name
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label htmlFor={inputId} className="label">{label}</label>}
      <input 
        id={inputId} 
        className={`input-field ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`} 
        {...props} 
      />
      {error && <span className="text-red-400 text-xs mt-1 block">{error}</span>}
    </div>
  )
}
