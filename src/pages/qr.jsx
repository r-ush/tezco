import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, TextField } from "@material-ui/core";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2E534B",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function Qr() {
  const [, setData] = React.useState("Not Found");
  const history = useHistory();

  const setTransactionId = (id) => {
    if (id.startsWith("tz")) {
      localStorage.setItem("transactionId", id);
      history.push("/confirmation");
    }
  };

  const handleTextChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setTransactionId(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        style={{ height: "100vh" }}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <WhiteTextTypography style={{ fontWeight: "bold" }}>
            Scan QR code to make payment
          </WhiteTextTypography>
        </Grid>
        <Grid item>
          <BarcodeScannerComponent
            // width={300}
            height={300}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                console.log(result.text);
                setTransactionId(result.text);
              } else setData("Not Found");
            }}
          />
        </Grid>
        <Grid item>
          <Box>
            <CssTextField
              onChange={handleTextChange}
              id="outlined-basic"
              label="Enter Tezoc ID:"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
