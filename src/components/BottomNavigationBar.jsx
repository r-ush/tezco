/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
// import predict from "../assets/predict.svg";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        height: "56px",
        left: 0,
        bottom: 0,
        background: "#FFFFF",
        backdropFilter: "blur(10px)",
        boxShadow: "0px -4px 0px #2E534B",
        borderRadius: "12px 12px 0px 0px;",
    },
    menuItem: {
        color: "#FBFBFB",
    },
});

export default function BottomNavigationBar({ setNavValue, navValue }) {
    const classes = useStyles();

    return (
        <BottomNavigation
            value={navValue}
            onChange={(event, newValue) => {
                setNavValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                className={classes.menuItem}
                label="Home"
                icon={<HomeRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Prediction"
                icon={<ReceiptRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Transaction"
                icon={<ReceiptRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Profile"
                icon={<PersonRoundedIcon />}
            />
        </BottomNavigation>
    );
}
