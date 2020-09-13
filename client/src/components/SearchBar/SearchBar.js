import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import classes from './SearchBar.module.css';

export default function SearchBar() {
    const [value, setValue] = useState({handle: "tourist"});
    const {handle} = value;
    const onChange = e => setValue({...value, [e.target.name]: e.target.value});
    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(handle);
    }
    

    return (
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
    </div>
    );
  }