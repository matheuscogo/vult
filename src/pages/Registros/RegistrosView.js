import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'

function RegistrosView(props) {
  const { title } = props
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>Em desenvolvimento...</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

RegistrosView.propTypes = {
  title: PropTypes.string.isRequired,
}

RegistrosView.defaultProps = {
  title: '',
}

export default RegistrosView
