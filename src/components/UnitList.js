import React from 'react'
import { Unit } from '.'
import DATA from '../data'

export function UnitList() {
  return Object.keys(DATA.units).map(unit => <Unit id={unit} key={unit} />)
}
