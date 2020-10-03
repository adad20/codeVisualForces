import React, { useState, useEffect } from "react";
import Classes from "./UserDetails.module.css";
import axios from 'axios';
import { Box, Card, CardContent, Container } from "@material-ui/core";

const UserDetails = ({ handle }) => {
  let [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let json = await axios.get(`/api/userinfo/${handle}`);
        setDetails(json.data[0]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [handle]);


  
  return (
    <Container>
      <Box boxShadow={5}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box flex={2}>
                <Box display="flex" flexDirection="column">
                  <span>Name</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.firstName} {details.lastName}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>Country</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.country}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>Title</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.rank}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>MaxTitle</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.maxRank}
                  </span>
                </Box>
              </Box>
              <Box flex={1}>
                <Box display="flex" flexDirection="column">
                  <span>Rating</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.rating}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>MaxRating</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.maxRating}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>Friend</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.friendOfCount}
                  </span>
                </Box>
                <Box display="flex" flexDirection="column" mt={2}>
                  <span>Contributions</span>
                  <span style={{fontWeight:'bold'}}>
                    {details.contribution}
                  </span>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default UserDetails;
