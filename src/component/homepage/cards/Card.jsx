import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


 function RecipeReviewCard(props) {
    const [num, setnum] = React.useState(1);
    const [qty, setqty] = React.useState('');

    const handleChange1 = (event) => {
      setqty(event.target.value);
    };
    const handleChange = (event) => {
      setnum(event.target.value);
  };
  const handelcart = () => {
    
  }
  let options = props.fooddata.options;
  
  let priceOption = Object.keys(options[0])
  console.log(num,qty);
  return (
    <>
    <Card sx={{ maxWidth: 350 ,'&:hover':{boxShadow:'5px 10px  10px rgba(240,240,240,2)'}} 
    
     }  >
    
      <CardMedia
       
        component="img"
        height="194"
        image=''
        alt="Paella dish"
        src={props.fooddata.img}
      />
      <CardContent>
      <Typography variant="body1" color="text.primary" fontSize={20}>
         {props.fooddata.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
         {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
      
        <IconButton aria-label="add to cart" onClick={handelcart}>
          <ShoppingCartIcon sx={{ fontSize: 40 }} color='primary'  ></ShoppingCartIcon>
        </IconButton>
      




      <FormControl sx={{ m: 1, minWidth: 70 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Number</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={num}
          onChange={handleChange}
          autoWidth
          label="number"
        >
          <MenuItem value="">
         
            </MenuItem>
            <MenuItem key={1} value={1}>1</MenuItem>
            <MenuItem key={2} value={2}>2</MenuItem>
            <MenuItem key={3} value={3}>3</MenuItem>
            <MenuItem key={4} value={4}>4</MenuItem>
            <MenuItem key={5} value={5}>5</MenuItem>
         
        
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 70, }}>
        <InputLabel id="demo-simple-select-autowidth-label">Qty</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={qty}
          onChange={handleChange1}
          autoWidth
          label="qty"
        >
          <MenuItem value="">
           
            </MenuItem>
            {priceOption.map((e) => {
             return <MenuItem key={e} value={e}>{e}</MenuItem>
            })}
         
          
         
        </Select>
      </FormControl>
 
      <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
           {}
          </Typography>
        </div>
       
      </CardActions>
      
    </Card></>
  );
}

export default React.memo(RecipeReviewCard);