import React from 'react'

export function Card({ variant = 'default', className = '', children, ...props }) {
  const variantClass = variant === 'gold' ? 'glass-card-gold' : ''
  
  return (
    <div className={`glass-card ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  )
}
