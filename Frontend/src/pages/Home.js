import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {

  const history = useHistory();
  const gotoNextPage = () =>{ 
    let path = `/propertyname`; 
    history.push(path);
}
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }} style={{padding:"30px",borderRadius:"30px"}}>
      <CardActionArea onClick={gotoNextPage}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          style={{borderRadius:"20px"}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                A/39 Sector 28
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available Amount
            <br/>
            Funding process
            <br/>
            Total Earnig
            <br/>
            Your Ownership
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div color={{display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"}}>
            <Button variant="outlined" color="success">
            Join Waitlist
            </Button>
            </div>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }} style={{padding:"30px",borderRadius:"30px"}}>
      <CardActionArea onClick={gotoNextPage}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          style={{borderRadius:"20px"}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          A/39 Sector 28
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Available Amount
            <br/>
            Funding process
            <br/>
            Total Earnig
            <br/>
            Your Ownership
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div color={{color:"blue",justifyContent:"center",alignItems:"center"}}>
            <Button variant="outlined" color="success">
            Join Waitlist
            </Button>
        </div>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }} style={{padding:"30px",borderRadius:"30px"}}>
      <CardActionArea onClick={gotoNextPage}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="green iguana"
          style={{borderRadius:"20px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          A/39 Sector 28
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Available Amount
            <br/>
            Funding process
            <br/>
            Total Earnig
            <br/>
            Your Ownership
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
           <div color={{color:"blue",justifyContent:"center",alignItems:"center"}}>
            <Button variant="outlined" color="success">
            Join Waitlist
            </Button>
            </div>
        
      </CardActions>
    </Card>
        </Grid>
      </React.Fragment>
    );
  }

export default function Home() {
  return (
        <Box
        container
        borderRadius="25px"
        padding="5%"
        boxShadow="2px"
        bgcolor="whitesmoke"
        margin="10%"
        justifyContent="center"
        alignItems="center"
        color="grey"
        >
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
