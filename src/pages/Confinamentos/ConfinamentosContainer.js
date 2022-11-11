import React from 'react'
import ConfinamentosView from './ConfinamentosView'
import datagridConfinamentosStore from './store/datagridConfinamentosStore'

export function ConfinamentosContainer() {
  return (
    <div>
      <ConfinamentosView
        title="Confinamentos"
        datagridConfinamentosStore={new datagridConfinamentosStore()}
      />
    </div>
  )
}
