import React from 'react'
import AvisosView from './AvisosView'
import datagridAvisosStore from './store/datagridAvisosStore'

export function AvisosContainer() {
  return (
    <div>
      <AvisosView
        title="Avisos"
        datagridAvisosStore={new datagridAvisosStore()}
      />
    </div>
  )
}
