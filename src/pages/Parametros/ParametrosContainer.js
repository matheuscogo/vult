import React from 'react'
import ParametrosView from './ParametrosView'
import datagridParametrosStore from './store/datagridParametrosStore'

export function ParametrosContainer() {
  return (
    <div>
      <ParametrosView
        title="Parametros"
        datagridParametrosStore={new datagridParametrosStore()}
      />
    </div>
  )
}
