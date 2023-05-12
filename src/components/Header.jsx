import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "./style.css";
const Header = () => {
  const result = useSelector((state) => state.cartDataState);
  console.log("redux data in header", result);
  return (
    <Stack className="header">
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Courier New",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        Mini Bazar
      </Typography>
      <Box className="cart-div">
        <WorkOutlineOutlinedIcon
          sx={{
            height: "3.5rem",
            width: "3.5rem",
            color: "white",
            mt: "1.3rem",
            cursor: "pointer",
          }}
        />

        <span component="span">{result.length}</span>
      </Box>
    </Stack>
  );
};

export default Header;
