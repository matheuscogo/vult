import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import ConfinamentoDatagrid from './components/ConfinamentoDatagrid'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import datagridConfinamentosStore from './store/datagridConfinamentosStore'

const ConfinamentosView = inject('datagridConfinamentosStore')(
  observer((props) => {
    const { title, datagridConfinamentosStore: store } = props
    return (
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item>
            <ConfinamentoDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

ConfinamentosView.propTypes = {
  title: PropTypes.string.isRequired,
}

ConfinamentosView.defaultProps = {
  title: '',
}

export default provider(datagridConfinamentosStore)(ConfinamentosView)
