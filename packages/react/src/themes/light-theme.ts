import { createTheme } from '@mui/material/styles'
import { palette } from '@woovi-ui/tokens'
import { typography, MuiButton } from '@woovi-ui/variants'

export const lightTheme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
  },
})
