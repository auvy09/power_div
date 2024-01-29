import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';


// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon,time ,color = 'primary', sx, ...other }) {
  return (<>
    <Card
      component={Stack}
      
      direction="column"
      sx={{
        px: 1,
        py: 2,
       borderBottomRightRadius:0,
       borderBottomLeftRadius:0,
        ...sx,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...other}
    >
      {icon && <Box sx={{ width: ['100px'], height: ['120px'], mt:3, mb:6 }} >{icon}</Box>}
     
        <Typography gutterBottom  variant="h6" component="div">
          Total Complain
        </Typography>
        <Typography   variant="h6" component="div">
          {total}
        </Typography>
        
      
    </Card>
    <Box sx={{
        mb:3,
       borderBottomRightRadius:2,
       borderBottomLeftRadius:2,
        ...sx,
        textAlign:'center',
       }}
         bgcolor={['rgba(4, 152, 74, 0.1)']}> {time}</Box></>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  time:PropTypes.string,
};
