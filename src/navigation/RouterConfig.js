import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Matrizes from '../pages/Matrizes'
import Confinamentos from '../pages/Confinamentos'
import AvisosContainer from '../pages/Avisos'
import Registros from '../pages/Registros'
import Planos from '../pages/Planos'
import Inseminacoes from '../pages/Inseminacoes'
import Parametros from '../pages/Parametros'
import {
  AVISOS,
  CONFINAMENTOS,
  HOME,
  INSEMINACOES,
  MATRIZES,
  PARAMETROS,
  PLANOS,
  REGISTROS,
} from '../navigation/CONSTANTS'

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={PARAMETROS} element={<Parametros />} />
        <Route exact path={MATRIZES} element={<Matrizes />} />
        <Route exact path={INSEMINACOES} element={<Inseminacoes />} />
        <Route exact path={CONFINAMENTOS} element={<Confinamentos />} />
        <Route exact path={PLANOS} element={<Planos />} />
        <Route exact path={REGISTROS} element={<Registros />} />
        <Route exact path={AVISOS} element={<AvisosContainer />} />
      </Routes>
    </div>
  )
}
