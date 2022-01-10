import { Box, Grid } from "@material-ui/core";
import React from "react";
import data from "../test_units_data.json";
import { useParams } from "react-router-dom";

const Details = () => {
  const param = useParams();
  // console.log(param.id);

  return (
    <div className="p-20">
      <Box component="h1" textAlign="center">
        Details Page
      </Box>
      <Grid container item xs={12} md={8} className="grid-container">
        {data
          .filter((item) => param.id == item.apartment_id)
          .map((filteredData, index) => {
            return (
              <div key={index} style={{width:'100%'}}>
                <Grid container>
                  <Grid item xs={6} className="content">
                    ID
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.ID}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    Unique Id
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.uniqueID}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    Availability
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.availability}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    Bedroom
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.bedroom}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    View
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.view}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    Layout
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.layout}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} className="content">
                    Floor
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.floor}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    Apt No
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.aptNo}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    Grossm 2
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.grossm2}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    NetAream 2
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.netAream2}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    Direction
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.direction}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    BlockNew
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.blockNew}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    Price
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.price}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    BlockMap
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.blockMap}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} className="content">
                    Apartment Id
                  </Grid>
                  <Grid item xs={6} className="content">
                    {filteredData.apartment_id}
                  </Grid>
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
};

export default Details;
