import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import DenseTable from './table';
import  {Box } from '@mui/system';
import Container from '@mui/material/Container';


export default function SimpleAccordion() {
  return (
    <>
        <Box >
            <Container>
            

            <Grid container direction={'column'}>
            <Typography paddingBottom={2} variant="h5"
            sx={{
                color: 'white',
            }}>
                #DescidaProduto_Norte
                
            </Typography>
            <Grid item>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Fino_FVKN</Typography></AccordionSummary>
                <AccordionDetails>
                    <DenseTable></DenseTable>

                </AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Fino_F7KN</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Fino_F1KN</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Fino_F2KN</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Fino_SFCK</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>#DescidaProduto_Superfino_PGCJ</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>


    </Grid>
        
    
    </Container>
            
        </Box>
    </>
  );
}
