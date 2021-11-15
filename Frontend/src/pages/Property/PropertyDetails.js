import React,{useState} from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ImageGallery from 'react-image-gallery'
import NativeSelect from '@mui/material/NativeSelect'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "react-image-gallery/styles/css/image-gallery.css"
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone'
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import { styled } from '@mui/material/styles';

import './PropertyDetails.css'

function createData( firstColumn, Day0, Year1, Year2, Year3, Year4, Year5) {
    return {firstColumn, Day0, Year1, Year2, Year3, Year4, Year5};
  }
  
  const rows = [
    createData('Investment', "₹39,60,000"),
    createData('Rents'," " ,"1,80,000","1,80,000", "1,80,000","1,80,000","1,80,000","1,80,000"),
    createData('Sale Value'," ","-","-","-","-", "50,85,937"),
    createData('Total', "", "₹1,80,000", "₹1,80,000", "₹1,80,000","₹1,80,000","₹5,805,937"),
  ];


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const Item1 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
  
const PropertyDetails = () =>{
    const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

    return (
        <div> 
            <Box
            container
            borderRadius="25px"
            padding="4%"
            // boxShadow="2px"
            bgcolor="whitesmoke"
            marginTop="0%"
            marginLeft="10%"
            marginRight="10%"
            marginBottom="10%"
            justifyContent="center"
            alignItems="center"
            color="grey"
            >
            <br/><br/><br/>
            <Grid container spacing={2} 
            direction="row"
            justifyContent="space-evenly">
            <Grid item xs={12} md={8}>
            <ImageGallery items={images}/>
            <br/>
            </Grid>
            <Grid item xs={12} md={4}>
                <br/><br/>
                <Item>
                <div>
                        <h3> House1, Thane-667666 </h3>
                        <hr/>
                        <br/>
                        <div class="demo">
                            <span>
                                <EqualizerTwoToneIcon/>
                                <br/>
                                <a style={{fontWeight:'bold'}}>8.44%</a>
                                <br/>
                                <a style={{fontSize:'10px'}}>HIGH RENTAL YIELD</a>
                            </span>
                            <span>
                                <ShowChartTwoToneIcon/>
                                <br/>
                                <a style={{fontWeight:'bold'}}>15.0%</a>
                                <br/>
                                <a style={{fontSize:'10px'}}>HIGH RETURNS</a>
                            </span>
                        </div>
                        <br/>
                        <div class="demo" >
                            <span>
                                <AttachMoneyTwoToneIcon/>
                                <br/>
                                <a style={{fontWeight:'bold'}}> 39,60,00 Rs </a>
                                <br/>
                                <a style={{fontSize:'10px'}}> ATTRACTIVE PRICE </a>
                            </span>
                            <span>
                                <LocationOnTwoToneIcon/>
                                <br/>
                                <a style={{fontWeight:'bold'}}>MUMBAI</a>
                                <br/>
                                <a style={{fontSize:'10px'}}>LOCATION</a>
                            </span>
                        </div>
                        <br/>
                        </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={8}>
                <Item1>
                <div style={{margin:"10px"}}>
                        <Box>                               
                                <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                <option value={1}>Monthly Cash Flow</option>
                                <option value={2}>Yearly Cash Flow</option>
                                </NativeSelect>
                        </Box>
                        
                        <br/>
                        <div class="demo">
                            <span>Yearly Rent<br/>XXXXXXXX Rs</span>
                            <span>Property Management Fee<br/>XXXXXXXX Rs</span>
                            <span>10% TDS(Taxes)<br/>XXXXXXXX Rs</span>
                        </div>
                        <br/>
                        </div>
                        <br/>
                        
                </Item1>
                {/* <Item1> */}
                <br/><br/><br/>
                
                <TableContainer component={Paper}>
                <h3 style={{margin:"10px",fontSize:"15px"}}> Financial Model </h3>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" style={{width:"100000px"}}>Day 0</TableCell>
            <TableCell align="right">Year 1</TableCell>
            <TableCell align="right">Year 2</TableCell>
            <TableCell align="right">Year 3</TableCell>
            <TableCell align="right">Year 4</TableCell>
            <TableCell align="right">Year 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstColumn}
              </TableCell>
              <TableCell align="right">{row.Day0}</TableCell>
              <TableCell align="right">{row.Year1}</TableCell>
              <TableCell align="right">{row.Year2}</TableCell>
              <TableCell align="right">{row.Year3}</TableCell>
              <TableCell align="right">{row.Year4}</TableCell>
              <TableCell align="right">{row.Year5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </Item1> */}
            </Grid>
            
            <Grid item xs={12} md={4}>
                <Item>
                <div>
                        <h3> Investment Overview </h3>
                        <hr/>
                        <div class="demo">There is a unique opportunity to purchase 35,802 sf in Lodha iThink, Mumbai, tenanted to Tata Motors Finance at an all-in price of Rs. 39,60,00,000 (Rs. 10,000 per sf) implying a 8.44% yield and 15.0% IRR for eligible investors. Lodha iThink is an 800,000 sf Grade A tech park in Thane with tenants like Future Generali, Willis Towers Watson, Worley Parsons, Tata Capital, Tata Motors Finance, Euronet, among others. Thane is strategically located on the Eastern Express Highway and constitutes c. 9% of the overall office absorption in Mumbai. We believe this is a unique opportunity to acquire a leased Grade A asset with a 3 year lock-in and a blue chip tenant.</div>
                </div>
                </Item>
            </Grid>
            
            </Grid>
            </Box>
        </div>
    )
}

export default PropertyDetails