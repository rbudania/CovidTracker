import React from 'react'
//we will use material ui it prevents from excessive use of css
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

function Cards(props)
{
 // console.log(props);
   const {data} =props;
   const { confirmed ,recovered,deaths,lastUpdate } =data;
   if(!confirmed)
   {
       return (
           <div> loading.....</div>
       )
   }
   return (
       <div className='styles.container'> 
        <Grid container spacing={3} justify="center">
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom> INFECTED</Typography>
                     <Typography variant="h5" >
                         <CountUp start={0}  end={confirmed.value}  duration={2.5} separator="," />                                              
                         </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" >Total number of active cases of COVID-19 till date</Typography>
                 </CardContent>
             </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom> RECOVERED</Typography>
                     <Typography variant="h5" >
                     <CountUp start={0}  end={recovered.value}  duration={2.5} separator="," />                         
                         </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" >Number of cases recovered from COVID-19</Typography>
                 </CardContent>
             </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom> DEATHS</Typography>
                     <Typography variant="h5" >
                     <CountUp start={0}  end={deaths.value}  duration={2.5} separator="," />
                         </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" >Deaths Caused by COVID-19</Typography>
                 </CardContent>
             </Grid>
        </Grid>
       </div>
   ) 
}

export default Cards