import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TransactionCard from "components/TransactionCard";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function TransactionPage() {
  return (
    <div>
      <div>
        <Box px={2} py={2} style={{ background: "#2E534B" }}>
          <WhiteTextTypography style={{ fontWeight: "bold" }} variant="h6">
            Recent Transactions
          </WhiteTextTypography>
        </Box>
      </div>
      <div>
        <TransactionCard
          name="Martina"
          credits={240}
          item="Meat"
          quantity={20}
          date="26th February 2021"
          carbon="06"
        />
        <TransactionCard
          name="IndianOil"
          credits={230}
          item="Petrol"
          quantity={10}
          date="26th February 2021"
          carbon="12"
        />
        <TransactionCard
          name="G.K Stores"
          credits={12}
          item="Petrol"
          quantity={1}
          date="26th February 2021"
          carbon="4"
        />
        <TransactionCard
          name="Pharma Folks"
          credits={14}
          item="Medicine"
          quantity={1}
          date="26th February 2021"
          carbon="1"
        />
      </div>
      <Box m={1} p={3} />
    </div>
  );
}
