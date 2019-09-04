import React from 'react'

export function Icon({ name, panel }) {
  return (
    <span className={panel ? 'panel-icon' : 'icon'}>
      <i className={`fas fa-${name}`}></i>
    </span>
  )
}
