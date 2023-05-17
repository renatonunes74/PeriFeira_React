import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css'
import { Stack } from '@mui/material';
function Home() {
	return (
			<>
			<Grid container className='caixa' alignItems='center' justifyContent='center'>
				<Grid item xs={4}>
					<Stack flexDirection='column' gap={2}>
							<Box>
								<Typography className='texto1' variant='h2'>Alimentos saudáveis, sustentáveis e acessíveis.</Typography>
							</Box>
						<Box>
							<Button className='botao' variant="contained">Começar</Button>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={4}>
						<img className='image' src="/src/assets/Camada 5.png" alt="" />
				</Grid>
			</Grid>
			</>
	);
};
export default Home;