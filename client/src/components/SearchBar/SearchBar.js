import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import classes from './SearchBar.module.css';
import UserDetails from './UserDetails/UserDetails';
import RatingsGraph from './RatingsGraph/RatingsGraph';
import axios from 'axios'

export default function SearchBar() {
    const [value, setValue] = useState({
      handle: "tourist",
      userData: '',
      ratingsData:[]
    });
    const {handle, userData, ratingsData} = value;
    const onChange = e => setValue({...value, [e.target.name]: e.target.value});
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        let data1 = await axios.get(`/api/userinfo/${handle}`);
        let data2 = await axios.get(`/api/ratings/${handle}`);
        setValue({...value, userData: data1.data[0], ratingsData: data2.data});
      } catch (error) {
        console.error(error);
      }
    }
    

    return (
      <div>
      <div className={classes.container}>
        <div className={classes.margin}>
        <form onSubmit={e => onSubmit(e)}>
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" value={handle} name="handle" onChange={e => onChange(e)}/>
            </Grid>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </form>
        </div>
        <br />
      {userData?<UserDetails details={userData}/>:<p>No data available</p>}
      </div>
      <RatingsGraph ratingsData={ratingsData} />
      </div>
      
    );
  }