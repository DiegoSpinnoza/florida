import React from 'react'

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) {
  const baseClasses = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = size === 'md' ? '' : `btn-${size}`
  
  return (
    <button className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
