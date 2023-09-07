import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./cards/Card";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
const Home = () => {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 const [search,setsearch]=useState('')

  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const loaddata = async () => {
    let responce = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    responce = await responce.json();
    // console.log(responce[1])
    let fooditem = responce[0];
    setfooditem(fooditem);
    let foodcatagory = responce[1];
    setfoodcat(foodcatagory)
  };
  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
     
      <Navbar ></Navbar>
      <Box marginTop={2}  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                  objectFit:"cover"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        <input 
          className="textfild"
          style={{width:"100%",maxWidth:500,position:"absolute",zIndex:1,outline:"none",margin:30,border:"none",borderRadius:"50px",height:50,fontSize:20,textAlign:"left",paddingLeft:30}}
          required
                  
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          value={search}
          name="search"
          placeholder=" search..."
          type="search"
          id="search"
          autoComplete="search"
        />
    </Box>
   
      <Typography variant="div" sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><Container maxWidth="lg" sx={{ marginTop: "40px", marginRight:0,marginLeft:0}}>
        <Grid item spacing={3} >
          {foodcat !==[] ? foodcat.map((e, i) => {
            return (<>
              <div key={e.id}  style={{margin:'2rem',font:"caption",fontSize:"2rem",fontWeight:"bold"}}>{e.CategoryName}</div>
                
                <hr/> {fooditem!==[]?fooditem.filter((item)=>{return item.CategoryName===e.CategoryName&& item.name.toLowerCase().includes(search.toLowerCase())}).map((e, i) => {
                  return (
                    <>
                    <Grid key={e.id} item xs={12} sm={6} md={4}  margin={2} columns={12} sx={{display:"inline-block",}} >
<Card fooddata={e} description={e.description}></Card>
                      </Grid>
                      </>
                  )
                }):""} 
              </>
            );
          }):""}
        </Grid>
      </Container></Typography>
    </>
  );
};

export default Home;
