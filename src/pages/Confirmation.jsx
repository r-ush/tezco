import React from "react";
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
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handQuantChange = (event) => {
    setQuantity(event.target.value);
  };
  const history = useHistory();
  const recipient = localStorage.getItem("transactionId");
  const curBalance = localStorage.getItem("balance");
  const priceMapping = {
    "": 3,
    10: 5,
    20: 2,
    30: 1,
  };

  const transaction = async () => {
    const tezos = new Tezos();
    const res = await tezos.sendTransaction(
      "tz1gcBJ67BBdCxeekyzwjSNf4ovgjyDBStuc",
      recipient,
      quantity * priceMapping[age]
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
                onChange={handQuantChange}
                placeholder={quantity}
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
                {quantity * priceMapping[age]}
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
                {curBalance - quantity * priceMapping[age]}
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
