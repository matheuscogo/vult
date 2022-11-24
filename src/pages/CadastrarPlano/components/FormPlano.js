import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import Fab from '@mui/material/Fab'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import { isNumber, map } from 'lodash'
import Check from '@mui/icons-material/Check'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

export default function FormPlano() {
  const history = useNavigate()

  const [type, setType] = useState('')
  const [min, setMin] = useState([])
  const [max, setMax] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
    })
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
    console.warn('type', type)
    var teste = []
    for (var i = 1; i <= type; i++) {
      console.warn('i', i)
      teste.push(i)
      // console.warn('min', min)
    }
    console.warn('teste', teste)
    setMin(teste)
  }

  const handleOneChange = (event) => {
    var teste = []
    for (var i = 1; i <= type; i++) {
      console.warn('i', i)
      teste.push(i)
      // console.warn('min', min)
    }
    console.warn('teste', teste)
    setMin(teste)
  }

  const handleTwoChange = (event) => {
    setMax(event.target.value)
    console.warn('max', max)
  }

  const goBackward = () => {
    history(-1)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Descrição"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Tipo de gestação"
                  fullWidth
                  onChange={handleTypeChange}
                >
                  <MenuItem value={''}>None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={max}
                  label="De"
                  fullWidth
                  onChange={handleOneChange}
                >
                  {map(min, (i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={max}
                  label="Até"
                  fullWidth
                  disabled={!isNumber(min)}
                  onChange={handleTwoChange}
                >
                  {map(min, (i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <Box sx={{ mt: 1 }}>
              <Grid container spacing={14}>
                <Grid item xs={6} sm={6}>
                  <Fab
                    variant="extended"
                    style={{ float: 'left' }}
                    fullWidth
                    onClick={() => goBackward()}
                  >
                    <ArrowBack sx={{ mr: 1 }} />
                    Voltar
                  </Fab>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Fab
                    variant="extended"
                    style={{ float: 'right' }}
                    type="submit"
                    fullWidth
                  >
                    <Check sx={{ mr: 1 }} />
                    Cadastrar
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
