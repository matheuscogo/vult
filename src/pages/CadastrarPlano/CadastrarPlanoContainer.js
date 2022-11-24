import React from 'react'
import CadastrarPlanoView from './CadastrarPlanoView'
import formPlanoStore from './store/formPlanoStore'

export function CadastrarPlanoContainer() {
  return (
    <div>
      <CadastrarPlanoView
        title="Cadastrar Plano"
        formPlanoStore={new formPlanoStore()}
      />
    </div>
  )
}
