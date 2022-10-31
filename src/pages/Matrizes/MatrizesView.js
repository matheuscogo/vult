import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'

function MatrizesView(props) {
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

MatrizesView.propTypes = {
  title: PropTypes.string,
}

MatrizesView.defaultProps = {
  title: '',
}

export default MatrizesView
