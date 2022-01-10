import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import options from "../test_fliter_options.json";

const Building = () => {

  const [floor, setFloor] = useState("");
  const [grossm2, setGrossm2] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [price, setPrice] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  // getting the data of JSON file from redux state
  const state = useSelector(state => state.unitDataReducer)

  useEffect(() => {
    if (!floor && !bedroom && !price && !grossm2) {
      setSortedProducts(state.data);
    } else {

      const result = state.data.filter((product) => {
        const floorText =
          floor !== "" ? product.floor.split(".")[0] === floor : true;
        const bedRoomText =
          bedroom !== ""
            ? product.bedroom.split("")[0] === bedroom.split("")[0]
            : true;
        const groosm2Text =
          grossm2 !== ""
            ? +grossm2.split("-")[0] < (product.grossm2 | 0) &&
              +grossm2.split("-")[1] >= (product.grossm2 | 0)
            : true;
        const priceText =
          price !== ""
            ? +price.split("-")[0] < (product.price | 0) &&
              +price.split("-")[1] >= (product.price | 0)
            : true;

        return floorText && bedRoomText && groosm2Text && priceText;
      });
      setSortedProducts(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [floor, bedroom, price, grossm2, state.data]);

  // console.log({ floor, grossm2, bedroom, price });

  // clearing all the filters on single click
  const clearFilter = () => {
    setFloor("");
    setPrice("");
    setGrossm2("");
    setBedroom("");
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Floor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              {options.floor.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose Bedroom
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bedroom}
              onChange={(e) => setBedroom(e.target.value)}
            >
              {options.bedroom.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose Groossm2
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={grossm2}
              onChange={(e) => setGrossm2(e.target.value)}
            >
              {options.grossm2.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Prices</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              {options.prices.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} sm={3}>
          <Button
            type="button"
            style={{ background: "lightgreen" }}
            onClick={clearFilter}
          >
            Clear Filter
          </Button>
        </Grid>
      </Grid>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Unique Id</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell>Bedroom</TableCell>
            <TableCell>View</TableCell>

            <TableCell>Layout</TableCell>
            <TableCell>Floor</TableCell>
            <TableCell>Apt No</TableCell>
            <TableCell>Grossm 2</TableCell>
            <TableCell>NetAream 2</TableCell>

            <TableCell>Direction</TableCell>
            <TableCell>BlockNew</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>BlockMap</TableCell>
            <TableCell>Apartment Id</TableCell>
          </TableRow>
          {/* Showing the table content with filterdData */}
          {sortedProducts.map((item) => (
            <TableRow key={item.uniqueID}>
              <TableCell>{item.ID}</TableCell>
              <TableCell>{item.uniqueID}</TableCell>
              <TableCell>{item.availability}</TableCell>
              <TableCell>{item.bedroom}</TableCell>
              <TableCell>{item.view}</TableCell>

              <TableCell>{item.layout}</TableCell>
              <TableCell>{item.floor}</TableCell>
              <TableCell>{item.aptNo}</TableCell>
              <TableCell>{item.grossm2}</TableCell>
              <TableCell>{item.netAream2}</TableCell>

              <TableCell>{item.direction}</TableCell>
              <TableCell>{item.blockNew}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.blockMap}</TableCell>
              <TableCell>{item.apartment_id}</TableCell>
              <TableCell>
                {/* Redirecting to the Details component with nested router */}
                <Link style={{textDecoration:'none'}} to={`${item.apartment_id}/detail`}>Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Building;
