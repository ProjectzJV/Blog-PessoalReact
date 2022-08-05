import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate, Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    <Link to='/postagens'>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.mensagenscomamor.com/content/images/m000573887.jpg?v=1&amp;w=1080&amp;h=1080" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
    </> 

  );
}

export default Home;