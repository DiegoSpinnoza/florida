import React from 'react'

export function Badge({ variant = 'gray', className = '', children, ...props }) {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  )
}
