import React from 'react'
import RegistrosView from './RegistrosView'
import datagridRegistrosStore from './store/datagridRegistrosStore'

export function RegistrosContainer() {
  return (
    <div>
      <RegistrosView
        title="Registros"
        datagridRegistrosStore={new datagridRegistrosStore()}
      />
    </div>
  )
}
