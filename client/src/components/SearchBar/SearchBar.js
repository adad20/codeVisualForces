import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import classes from './SearchBar.module.css';
import UserDetails from './UserDetails/UserDetails';
import RatingsGraph from './RatingsGraph/RatingsGraph';
import Submissions from './Submissions/Submissions';
import RankingGraph from './RankingGraph/RankingGraph';
import { Box, Container } from '@material-ui/core';

export default function SearchBar() {
    const [value, setValue] = useState({
      handle: "Zeno_orz",
      loading: true
    });
    const {handle, loading} = value;
    const onChange = e => setValue({...value, [e.target.name]: e.target.value});
    const onSubmit = async (e) => {
      e.preventDefault();
      setValue({...value, loading: false});
    }

    return (
      <div>
        <Container maxWidth="sm">
          <Box paddingBottom={10}>
            <Box my={4} mx={2}>
              <form onSubmit={e => onSubmit(e)}>
                <Box display="flex" justifyContent="space-between">
                  <AccountCircle height={50} width={50}/>
                  <TextField 
                    fullWidth="100%" 
                    style={{marginLeft:20,marginRight:20}}
                    id="input-with-icon-grid" 
                    value={handle} name="handle" onChange={e => onChange(e)}/>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Box>
              </form>
            </Box>
            
            <Box mt={5}></Box>
            {!loading?<UserDetails handle={handle}/>:<center>No data available</center>}
            <Box mt={5}></Box>
            {loading ? '' : <RatingsGraph handle={handle} />}
            <Box mt={5}></Box>
            {loading ? '' : <Submissions handle={handle} />}
            <Box mt={5}></Box>
            {loading ? '' : <RankingGraph handle={handle} />}
          </Box>
        </Container>
      </div>
      
    );
  }