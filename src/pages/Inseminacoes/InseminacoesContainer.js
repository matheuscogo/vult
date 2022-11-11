import React from 'react'
import InseminacoesView from './InseminacoesView'
import datagridInseminacoesStore from './store/datagridInseminacoesStore'

export function InseminacoesContainer() {
  return (
    <div>
      <InseminacoesView
        title="Inseminações"
        datagridInseminacoesStore={new datagridInseminacoesStore()}
      />
    </div>
  )
}
