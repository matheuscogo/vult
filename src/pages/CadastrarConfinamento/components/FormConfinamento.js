import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { insertConfinamento } from '../../../services/Confinamentos'
import { getMatrizes } from '../../../services/Matrizes'
import { getPlanos } from '../../../services/Planos'
import { isEmpty, map } from 'lodash'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Fab from '@mui/material/Fab'
import Check from '@mui/icons-material/Check'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import Moment from 'moment'

const theme = createTheme()

export default function FormConfinamento() {
  const history = useNavigate()

  const [date, setDate] = useState(Date.now())
  const [matriz, setMatriz] = useState(0)
  const [plano, setPlano] = useState(0)
  const [matrizForSelect, setMatrizForSelect] = useState([])
  const [planoForSelect, setPlanoForSelect] = useState([])

  const handleSubmit = async (event) => {
    Moment.locale('pt-br')
    const formattedDate = Moment(date).format('YYYY-MM-DD')

    if (
      !isEmpty(String(date)) &&
      !isEmpty(String(matriz)) &&
      !isEmpty(String(plano))
    ) {
      const { message } = await insertConfinamento(
        JSON.stringify({
          matrizId: matriz,
          dataConfinamento: formattedDate,
          planoId: plano,
        })
      )

      alert(message)
    }
  }

  const handlePlanoChange = (event) => {
    setPlano(event.target.value)
  }

  useEffect(() => {
    getMatrizes()
      .then((response) => {
        setMatrizForSelect(response)
      })
      .catch()
    getPlanos()
      .then((response) => {
        setPlanoForSelect(response)
      })
      .catch()
  }, [])

  const handleChange = (event) => {
    setMatriz(Number(event.target.value))
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
          <Box component="form" onSubmit={handleSubmit} sm={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="matriz-simple-select-standard-label">
                    Matriz
                  </InputLabel>
                  <Select
                    fullWidth
                    value={matriz}
                    onChange={handleChange}
                    autoWidth
                    label="Matriz"
                  >
                    <MenuItem value={0}>
                      <em>Selecione</em>
                    </MenuItem>
                    {map(matrizForSelect, (value, index) => {
                      if (!isEmpty(value)) {
                        return (
                          <MenuItem key={index} value={value.id}>
                            {value.numero}
                          </MenuItem>
                        )
                      }
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="plano-simple-select-standard-label">
                    Plano
                  </InputLabel>
                  <Select
                    fullWidth
                    value={plano}
                    onChange={handlePlanoChange}
                    autoWidth
                    label="Plano"
                  >
                    <MenuItem value={0}>
                      <em>Selecione</em>
                    </MenuItem>
                    {map(planoForSelect, (value, index) => {
                      if (!isEmpty(value)) {
                        return (
                          <MenuItem key={index} value={value.id}>
                            {value.nome}
                          </MenuItem>
                        )
                      }
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Data de confinamento"
                    value={date}
                    inputFormat="DD/MM/YYYY"
                    format="yyyy-MM-dd"
                    onChange={(newValue) => {
                      setDate(newValue)
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
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
