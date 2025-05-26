import { Typography, Box } from '@mui/material'


const Header = () => {
  return (
    <Box 
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '30vh', sm: '40vh', md: '50vh' },
        backgroundColor: 'primary.dark',
        padding: 2,
        marginBottom: 4,
    }}>
    <Typography
     variant='h1'
     textAlign={'center'}
     color='primary.contrastText'
     gutterBottom
    sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        fontFamily: "Matemasie",
        fontWeight: 'bold',
    }}
    >
    Music Melody
    </Typography>
    <Typography 
        variant='h3'
        textAlign={'center'}
       
        gutterBottom
        sx={{ 
            fontSize:{xs: '1rem', sm: '1.5rem', md: '2rem'},
        color: 'seconadark.dark',
        fontFamily: "Matemasie",
        }}
        >Stream. Organize. Feel the Beat.

    </Typography>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
        }} />
    </Box>
  )
}

export default Header

