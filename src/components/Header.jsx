import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { Link } from "react-router-dom";
import { SearchSharp } from "@mui/icons-material";
const Header = () => {
  const result = useSelector((state) => state.cartDataState);
  // console.log(result, "before set item");
  localStorage.setItem("key", JSON.stringify(result));

  console.log("redux data in header", result);
  return (
    <Stack className="header">
      <Link className="link" to="/">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Courier New",
            color: "white",
            textTransform: "uppercase",
            // "&:hover": {
            //   color: "#000",
            // },
          }}
        >
          troops bazar
        </Typography>
      </Link>
      <Stack>
        <SearchSharp
          size="10.5rem"
          sx={{
            position: "absolute",
            top: "1.3rem",
            ml: "1rem",
            fontSize: "2.5rem",
          }}
        />
        
      </Stack>
      <Link to="/cart">
        <Box className="cart-div">
          <WorkOutlineOutlinedIcon
            sx={{
              height: "3.5rem",
              width: "3.5rem",
              color: "white",
              mt: "1.3rem",
              cursor: "pointer",
              // "&:hover": {
              //   color: "#000",
              // },
            }}
          />

          <span component="span">{result.length}</span>
        </Box>
      </Link>
    </Stack>
  );
};

export default Header;
