import React from 'react'
import PlanosView from './PlanosView'
import datagridPlanosStore from './store/datagridPlanosStore'

export function PlanosContainer() {
  return (
    <div>
      <PlanosView
        title="Planos"
        datagridPlanosStore={new datagridPlanosStore()}
      />
    </div>
  )
}
