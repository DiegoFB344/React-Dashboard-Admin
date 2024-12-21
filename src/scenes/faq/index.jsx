import { Box, Typography, useTheme} from '@mui/material';
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently asked Quewstions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, itaque asperiores consequuntur, est officia, perspiciatis porro ab accusantium exercitationem totam illo ea minima expedita accusamus molestias aperiam molestiae iure modi.
                    Cum ullam nisi praesentium ips
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                your favorite question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, itaque asperiores consequuntur, est officia, perspiciatis porro ab accusantium exercitationem totam illo ea minima expedita accusamus molestias aperiam molestiae iure modi.
                    Cum ullam nisi praesentium ips
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, itaque asperiores consequuntur, est officia, perspiciatis porro ab accusantium exercitationem totam illo ea minima expedita accusamus molestias aperiam molestiae iure modi.
                    Cum ullam nisi praesentium ips
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, itaque asperiores consequuntur, est officia, perspiciatis porro ab accusantium exercitationem totam illo ea minima expedita accusamus molestias aperiam molestiae iure modi.
                    Cum ullam nisi praesentium ips
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, itaque asperiores consequuntur, est officia, perspiciatis porro ab accusantium exercitationem totam illo ea minima expedita accusamus molestias aperiam molestiae iure modi.
                    Cum ullam nisi praesentium ips
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ;
