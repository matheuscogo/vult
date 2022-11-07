import React from 'react'
import MatrizesView from './MatrizesView'
import datagridMatrizesStore from './store/datagridMatrizesStore'

export function MatrizesContainer() {
  return (
    <div>
      <MatrizesView
        title="Matrizes"
        datagridMatrizesStore={new datagridMatrizesStore()}
      />
    </div>
  )
}
