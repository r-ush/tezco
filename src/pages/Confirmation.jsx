import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@material-ui/core";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function Confirmation() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box px={2} py={5}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography style={{ fontWeight: "bold" }}>
              Transferring to XYZ{" "}
            </Typography>
          </Box>
          <Box
            py={15}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Typography
              style={{ fontWeight: "bold", color: "#2E534B", fontSize: 16 }}
            >
              Choose Commodity
            </Typography>
            <Select
              style={{ width: 300 }}
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>Petrol</em>
              </MenuItem>
              <MenuItem value={10}>Meat</MenuItem>
              <MenuItem value={20}>Clothes</MenuItem>
              <MenuItem value={30}>Medicine</MenuItem>
            </Select>

            <Box
              pt={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Typography
                style={{ fontWeight: "bold", color: "#2E534B", fontSize: 16 }}
              >
                Enter Quantity
              </Typography>
              <TextField
                style={{ width: 300 }}
                type={"number"}
                id="outlined-basic"
                variant="outlined"
                color="primary"
              />
            </Box>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography style={{ color: "red" }}>
                Token to be deducted:
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "red" }}>23</Typography>
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography style={{ color: "green" }}>
                Balance after deduction:
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography style={{ color: "green" }}>153</Typography>
            </Grid>
          </Grid>
          <Box m={2} />

          <Button
            style={{ padding: 16 }}
            color="primary"
            variant="contained"
            fullWidth
          >
            Confirm and Pay
          </Button>

          <Box m={2} />
          <Button
            style={{ padding: 16 }}
            color="secondary"
            variant="contained"
            fullWidth
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}
