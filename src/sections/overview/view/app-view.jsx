// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Input } from '@mui/material';

import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';




// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
     <Box> <Typography color={['#048943']} variant="h4" sx={{ mb: 5 }}>
        All Utilities
      </Typography>
      <Box mb={3} >From: <Input type='date'/> To: <Input type='date'/>  <Button variant="contained" color="success">
 Filter
</Button> </Box>
     </Box>
      <Grid container spacing={1}>
        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/public/assets/logo/logo_1.png"/>}
            time="10:22 am 01, Jan 24"
          />
        </Grid>

        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/public/assets/logo/logo_2.png" />}
            time="10:22 am 01, Jan 24"
          />
        </Grid>

        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/public/assets/logo/logo_3.png" />}
            time="10:22 am 01, Jan 24"
          />
        </Grid>

        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
            title="Bug Reports"
            time="10:22 am 01, Jan 24"
            total={234}
            color="error"
            icon={<img alt="icon" src="/public/assets/logo/logo_4.png" />}
          />
        </Grid>
        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/public/assets/logo/logo_5.png" />}
            time="10:22 am 01, Jan 24"
          />
        </Grid>
        <Grid xs={6} sm={2} md={2}>
          <AppWidgetSummary
          
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img  alt="icon" src="/public/assets/logo/logo_6.png" />}
            time="10:22 am 01, Jan 24"
          />
        </Grid>
<Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Total Tickets"
            chart={{
              series: [
                { label: 'Opened', value: 3573 },
                { label: 'Solved', value: 5574 },
                { label: 'Processing', value: 1536 },
                { label: 'Reopened', value: 300 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Utility Wise Tickets"
            subheader="(Opened and Solved)"
            chart={{
              labels: [
                'BPDB',
                'BREB',
                'DESCO',
                'DPDC',
                'WZPDCL',
                'NESCO',
                
              ],
              series: [
                {
                  name: 'Open tickets',
                  type: 'column',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22],
                },
                {
                  name: 'Close tickets',
                  type: 'column',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43],
                },
                
              ],
            }}
          />
        </Grid>

        

        <Grid xs={12} md={6} lg={6}>
          <AppConversionRates
            title="Long Pending Tickets"
            subheader="Categories"
            chart={{
              series: [
                { label: 'Recharge Related', value: 350 },
                { label: 'Voltage Related', value: 300 },
                { label: 'Fuse Related', value: 220 },
                { label: 'Transformer Related', value: 200 },
                { label: 'Shutdown Related', value: 120 },
                { label: 'Load Related', value: 30 },
                { label: 'Query BPDB Related', value: 7 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <AppWebsiteVisits
            title="Utility Wise Long Pending Opened Tickets"
            
            chart={{
              labels: [
                'BPDB',
                'BREB',
                'DESCO',
                'DPDC',
                'WZPDCL',
                'NESCO',
                
              ],
              series: [
                {
                  name: 'Tickets Count',
                  type: 'area',
                  fill: 'gradient',
                  data: [230, 110, 220, 270, 130, 290],
                },
               
                
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
