import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
const Navbar = () => {
  return (
   <AppBar position='static'>
    <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
        {/* Logo Here */}
      </IconButton>
      <Typography variant='h6' component='div' >
        {/* Title Here */}
        SuiteTrack
      </Typography>
    </Toolbar>
   </AppBar>
  )
}
export default Navbar