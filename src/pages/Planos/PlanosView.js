import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import PlanosDatagrid from './components/PlanosDatagrid'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import datagridPlanosStore from './store/datagridPlanosStore'

const PlanosView = inject('datagridPlanosStore')(
  observer((props) => {
    const { title, datagridPlanosStore: store } = props
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
            <PlanosDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

PlanosView.propTypes = {
  title: PropTypes.string.isRequired,
}

PlanosView.defaultProps = {
  title: '',
}

export default provider(datagridPlanosStore)(PlanosView)
