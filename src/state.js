import React from 'react'
import DATA from './data'

export function initializeState() {
  const state = {}
  Object.keys(DATA.units).forEach(unit => {
    state[unit] = 0
  })
  return state
}

export function reducer(state, { action, unit }) {
  switch (action) {
    case 'hire':
      return {
        ...state,
        [unit]: state[unit] + 1
      }
    case 'fire':
      return {
        ...state,
        [unit]: state[unit] - 1
      }
    default:
      return state
  }
}

export const ArmyContext = React.createContext()
