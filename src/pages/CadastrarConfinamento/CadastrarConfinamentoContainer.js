import React from 'react'
import CadastrarConfinamentoView from './CadastrarConfinamentoView'
import formConfinamentoStore from './store/formConfinamentoStore'

export function CadastrarConfinamentoContainer() {
  return (
    <div>
      <CadastrarConfinamentoView
        title="Cadastrar Confinamento"
        formConfinamentoStore={new formConfinamentoStore()}
      />
    </div>
  )
}
