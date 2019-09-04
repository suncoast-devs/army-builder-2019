import React, { useReducer } from 'react'
import { Layout, UnitList, ResourcePanel, SummaryPanel } from '.'

import { initializeState, reducer, ArmyContext } from '../state'

export function App() {
  const [state, dispatch] = useReducer(reducer, initializeState())
  return (
    <ArmyContext.Provider value={[state, dispatch]}>
      <Layout>
        <div className="columns is-mobile">
          <div className="column">
            <UnitList />
          </div>
          <div className="column is-one-third">
            <ResourcePanel />
            <SummaryPanel />
          </div>
        </div>
      </Layout>
    </ArmyContext.Provider>
  )
}
