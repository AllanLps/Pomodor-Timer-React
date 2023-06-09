import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CycleContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CycleContextProvider>
            <Router />
          </CycleContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
