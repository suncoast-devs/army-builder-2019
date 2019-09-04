import React, { useContext } from 'react'
import { Icon } from '.'
import DATA from '../data'
import { ArmyContext } from '../state'

export function ResourcePanel() {
  const [state] = useContext(ArmyContext)
  const totalUnits = Object.values(state).reduce((m, n) => m + n)
  const totalCost = Object.keys(state).reduce((m, u) => {
    const count = state[u]
    const cost = DATA.units[u].cost

    return m + count * cost
  }, 0)
  return (
    <div className="panel">
      <div className="panel-heading">Resources</div>
      <div className="panel-block">
        <Icon panel name="coins" />
        {DATA.gold - totalCost}
      </div>
      <div className="panel-block">
        <Icon panel name="users" />
        {DATA.maxUnits - totalUnits}
      </div>
    </div>
  )
}
