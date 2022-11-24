import React from 'react'
import CadastrarInseminacaoView from './CadastrarInseminacaoView'
import formInseminacaoStore from './store/formInseminacaoStore'

export function CadastrarInseminacaoContainer() {
  return (
    <div>
      <CadastrarInseminacaoView
        title="Cadastrar Inseminação"
        formInseminacaoStore={new formInseminacaoStore()}
      />
    </div>
  )
}
