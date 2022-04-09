import React, { useState, useEffect } from "react";
import { CircularProgress, CircularProgressClasses } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({}));

const Progress = (props) => {
    const [level, setLevel] = useState(35);

    const progressTimer = setTimeout(() => {
        setLevel(level + 5);
    }, 1000);

    useEffect(() => {
        if (level >= 100) {
            setLevel(100);
            clearTimeout(progressTimer);
        }
    }, [level]);

    return (
        <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
                size={100}
                variant="determinate"
                value={100}
                sx={{
                    color: (theme) => theme.palette.grey[200],
                    position: "relative",
                }}
            />
            <CircularProgress
                size={100}
                variant="determinate"
                value={level}
                sx={{ position: "absolute" }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    size={100}
                    variant="caption"
                    components="div"
                    color="text.secondary"
                >{`${level}%`}</Typography>
            </Box>
        </Box>
    );
};

export default Progress;
// <div className={classes.root}>
//     <CircularProgress
//         variant="determinate"
//         value={level}
//         style={{
//             width: "150px",
//             height: "150px",
//             borderRadius: "100%",
//             boxShadow: "inset 0 0 0px 17px lightgray",
//             backgroundColor: "transparent",
//         }}
//         thickness={5}
//     />
// </div>

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
