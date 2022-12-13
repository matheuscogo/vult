import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import ParametroDatagrid from './components/ParametroDatagrid'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import datagridParametrosStore from './store/datagridParametrosStore'

const ParametrosView = inject('datagridParametrosStore')(
  observer((props) => {
    const { title, datagridParametrosStore: store } = props

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
            <ParametroDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

ParametrosView.propTypes = {
  title: PropTypes.string.isRequired,
}

ParametrosView.defaultProps = {
  title: '',
}

export default provider(datagridParametrosStore)(ParametrosView)
