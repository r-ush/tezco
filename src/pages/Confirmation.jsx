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
import { useHistory } from "react-router-dom";
import Tezos from "utility/tezos";

export default function Confirmation() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const history = useHistory();
  const recipient = localStorage.getItem("transactionId");
  const curBalance = localStorage.getItem("balance");
  const priceMapping = {
    5: 10,
    10: 5,
    20: 7,
    30: 8,
  };

  const transaction = async () => {
    const tezos = new Tezos();
    const res = await tezos.sendTransaction(
      "tz1gcBJ67BBdCxeekyzwjSNf4ovgjyDBStuc",
      "tz1fNhMg3sTG8ciCtGw8BUA4tR96UUM6CJw6",
      1
    );
    if (res) {
      history.push("/success");
    }
    // Call Tezos function here
    // Enable progress bar
    // If success move to confirmation screen
  };

  const goToHome = () => {
    history.push("/");
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
              Transferring to
            </Typography>
          </Box>
          <Typography style={{ fontWeight: "bold", fontSize: 13 }}>
            {recipient}
          </Typography>
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
              <MenuItem value={5}>
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
              <Typography style={{ color: "red" }}>
                {priceMapping[age]}
              </Typography>
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
              <Typography style={{ color: "green" }}>
                {curBalance - priceMapping[age]}
              </Typography>
            </Grid>
          </Grid>
          <Box m={2} />

          <Button
            onClick={transaction}
            style={{ padding: 16 }}
            color="primary"
            variant="contained"
            fullWidth
          >
            Confirm and Pay
          </Button>

          <Box m={2} />
          <Button
            onClick={goToHome}
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
