import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@mui/styles'
import { Button } from '@mui/material'

import styles from './styles'

const LinkRoute = (props) => {
  return (
    <Button
      style={{
        margin: 4,
        backgroundColor: '#21b6ae',
      }}
      component={Link}
      className={'black'}
      to={props.to}
      variant="contained"
    >
      {props.children}
    </Button>
  )
}

LinkRoute.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
}

LinkRoute.defaultProps = {
  children: '',
}

export default withStyles(styles)(LinkRoute)
