import React from 'react'
import CadastrarMatrizView from './CadastrarMatrizView'
import formMatrizStore from './store/formMatrizStore'

export function CadastrarMatrizContainer() {
  return (
    <div>
      <CadastrarMatrizView
        title="Cadastrar Matriz"
        formMatrizStore={new formMatrizStore()}
      />
    </div>
  )
}
