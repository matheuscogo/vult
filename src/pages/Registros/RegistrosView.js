import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import RegistrosDatagrid from './components/RegistrosDatagrid'
import datagridRegistrosStore from './store/datagridRegistrosStore'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'

const RegistrosView = inject('datagridRegistrosStore')(
  observer((props) => {
    const { title, datagridRegistrosStore: store } = props

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
            <RegistrosDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

RegistrosView.propTypes = {
  title: PropTypes.string,
  datagridRegistrosStore: PropTypes.any.isRequired,
}

RegistrosView.defaultProps = {
  title: '',
}

export default provider(datagridRegistrosStore)(RegistrosView)
