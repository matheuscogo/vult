// import React from 'react'
// import { DataGrid } from '@mui/x-data-grid'
// import { Box, Grid, Fab } from '@mui/material'
// import AddCircleIcon from '@mui/icons-material/AddCircle'
// import { useNavigate } from 'react-router-dom'
// import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
// import { isEmpty } from 'lodash'
// import { ROOT } from '../../../../../navigation/CONSTANTS'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/styles'

// import styles from './styles'

// const DefaultDatagrid = (props) => {
//   const {
//     rows,
//     columns,
//     add: { title, to },
//     classes,
//   } = props

//   const nav = useNavigate()
//   const goTo = (path) => {
//     nav(path || ROOT)
//   }

//   return (
//     <Box>
//       <Grid
//         container
//         spacing={0}
//         direction="row"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Grid item xs={4}>
//           {!isEmpty(title) ? (
//             <Fab
//               variant="extended"
//               style={{ padding: 25, float: 'left' }}
//               onClick={() => goTo(to)}
//             >
//               <AddCircleIcon sx={{ mr: 1 }} />
//               {title}
//             </Fab>
//           ) : null}
//           <Fab variant="extended" style={{ padding: 25, float: 'right' }}>
//             <ReplayCircleFilledIcon sx={{ mr: 1 }} />
//             Atualizar listagem
//           </Fab>
//         </Grid>
//       </Grid>
//       <Grid item xs={12} style={{ padding: 20 }}>
//         <DataGrid rows={rows} columns={columns} {...props} />
//       </Grid>
//     </Box>
//   )
// }

// DefaultDatagrid.propTypes = {
//   add: PropTypes.object,
// }

// DefaultDatagrid.defaultProps = {
//   add: {},
// }

// export default withStyles(styles)(DefaultDatagrid)
