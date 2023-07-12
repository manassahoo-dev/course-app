import { Grid, Typography } from '@mui/joy';
import CourseCard from '../components/CourseCard';

const CourseList = () => (
  <div>
    <Typography level='h4' component='h4'>
      Courses
    </Typography>

    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <CourseCard />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default CourseList;
