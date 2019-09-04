import React, { useContext } from 'react'
import { Icon } from '.'
import { ArmyContext } from '../state'
import DATA from '../data'

export function Unit({ id }) {
  const [state, dispatch] = useContext(ArmyContext)
  const unit = DATA.units[id]

  return (
    <article className="media">
      <div className="media-content">
        <h4 className="title is-4">{unit.name}</h4>
        <h5 className="subtitle">{unit.summary}</h5>
        <table className="table is-striped">
          <tbody>
            <tr>
              <th>
                <Icon name="coins" />
              </th>
              <td>{unit.cost}</td>
            </tr>
            <tr>
              <th>
                <Icon name="fighter-jet" />
              </th>
              <td>{unit.attack}</td>
            </tr>
            <tr>
              <th>
                <Icon name="heart" />
              </th>
              <td>{unit.health}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="media-right">
        <div className="level is-mobile">
          <div className="level-left">
            <span style={{ marginRight: '10px' }}>&times; {state[id]}</span>
          </div>
          <div className="level-right">
            <div className="buttons has-addons">
              <span
                className="button"
                onClick={() => {
                  dispatch({ action: 'hire', unit: id })
                }}
              >
                <Icon name="plus" />
              </span>
              <span
                className="button"
                onClick={() => {
                  dispatch({ action: 'fire', unit: id })
                }}
              >
                <Icon name="minus" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
