import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'

function HomeView(props) {
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
          <Typography>
            Software para gestão da alimentação de matrizes suinas.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

HomeView.propTypes = {
  title: PropTypes.string,
}

HomeView.defaultProps = {
  title: '',
}

export default HomeView
