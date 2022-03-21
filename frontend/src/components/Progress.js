import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    circleIndeterminate: {
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        boxShadow: "inset 0 0 0px 11px lightgray",
        backgroundColor: "transparent",
    },
}));

const Progress = (props) => {
    const [level] = useState(35);
    const classes = useStyles();

    console.log(classes);

    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                value={50}
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                    boxShadow: "inset 0 0 0px 11px lightgray",
                    backgroundColor: "transparent",
                }}
                thickness={5}
            />
        </div>
    );
};

export default Progress;

// <CardContent
// sx={{ position: "relative", display: "inline-flex" }}
// >
// <CircularProgress
//     // style={{ width: "150px" }}
//     variant="determinate"
//     value={bar}
// />

// {/* <CircularProgress
//     sx={{ position: "absolute", color: "grey" }}
//     variant="determinate"
//     value={100}
// /> */}
// {/* <Typography
//     variant="caption"
//     component="div"
//     color="text.secondary"
//     style={{ fontSize: "24px" }}
// >
//     {`${bar}%`}
// </Typography> */}
// </CardContent>
