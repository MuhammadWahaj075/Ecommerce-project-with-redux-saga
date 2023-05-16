import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeToCart } from "../redux/action";

import "./style.css";
import { productList } from "../redux/productAction";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import ReactStars from "react-stars";
import { useEffect } from "react";
import { Delete } from "@mui/icons-material";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDataState);

  console.log("🚀 ~ file: Main.jsx:12 ~ Main ~ data:", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <Stack
      sx={{
        // background: "yellow",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        className="product-container"
        mt="2rem"
        width="90vw"
      >
        {data.map((item) => (
          <Stack
            key={item.id}
            className="product-item"
            width="auto"
            margin="30px 20px"
            flexWrap="wrap"
            flexDirection="column"
          >
            {" "}
            <Paper
              id="product-card"
              sx={{ height: "auto", width: "500px" }}
              elevation={10}
            >
              <Box id="image" component="img" src={item.image} />

              <Typography id="text">title: {item.title}</Typography>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                id="text"
              >
                description: {item.description}
              </Typography>
              <Typography id="text">price: {item.price}</Typography>
              <Typography id="text">category: {item.category}</Typography>
              <Box ml="1rem">
                <ReactStars
                  value={item.rating.rate}
                  edit={false}
                  count={5}
                  size={40}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                mt="1rem"
                mb="1rem"
              >
              
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  variant="outlined"
                  color="success"
                  sx={{
                    fontFamily: "fantasy",
                    width: "90%",
                    "&:hover": {
                      background: "white",
                    },
                  }}
                >
                  Add to bag
                </Button>
                {/**/}
                <Button
                  onClick={() => dispatch(removeToCart(item.id))}
                  sx={{
                    // ml: "1rem",
                    fontFamily: "fantasy",
                    width: "90%",
                    mt: "1rem",
                  }}
                  variant="outlined"
                  color="error"
                >
                  <Delete /> Remove
                </Button>
              </Box>
            </Paper>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Main;
