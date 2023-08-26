import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>toodo</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}