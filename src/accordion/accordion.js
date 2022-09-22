import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import DenseTable from './table';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


export default function SimpleAccordion() {
  return (
    <>

    <Grid container direction={'column'}>
        <Grid item>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                            <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
                            </Accordion>
                        </Grid>
                        <HorizontalRuleIcon></HorizontalRuleIcon>
                        <Grid item>
                            <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                            <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>

                </AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>
        <AddIcon></AddIcon>
        <Grid item>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Produção Oeste Mfe</Typography></AccordionSummary>
                <AccordionDetails><DenseTable></DenseTable></AccordionDetails>
            </Accordion>
        </Grid>


    </Grid>

            
       
    </>
  );
}
