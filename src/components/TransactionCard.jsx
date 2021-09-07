import { makeStyles } from "@material-ui/core";
import React from "react";
import transactionProfileImg from "assets/transaction_profile.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F2F2F2",
    borderRadius: "6px",
    margin: "1rem 1rem",
    padding: "1rem",
  },
  top: {
    display: "flex",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "12px 0",
  },
  topHeader: {
    marginLeft: "12px",
  },
  item: { fontWeight: "bold", fontSize: "24px", lineHeight: "29px" },
  greenText: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "140%",
    color: "#2E534B",
  },
  bigCred: {
    fontWeight: "bold",
    fontSize: "31.2642px",
    lineHeight: "38px",
    color: "#2E534B",
  },
});

const TransactionCard = ({ name, item, credits, quantity, date, carbon }) => {
  const c = useStyles();
  return (
    <div className={c.root}>
      <div className={c.top}>
        <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
          {name}
        </Typography>
      </div>
      <div className={c.row}>
        <div>
          <div className={c.item}>{item}</div>
          <div>
            Quantity: <span className={c.greenText}>{quantity}</span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className={c.bigCred}>{credits} zco</span>
        </div>
      </div>
      <div className={c.row}>
        <div>
          <span className={c.greenText}>Transferred on: {date} </span>
        </div>
      </div>
      <div>
        <Typography style={{ fontSize: 12 }}>
          Carbon equivalent: {carbon} kgCO2
        </Typography>
      </div>
    </div>
  );
};

export default TransactionCard;
