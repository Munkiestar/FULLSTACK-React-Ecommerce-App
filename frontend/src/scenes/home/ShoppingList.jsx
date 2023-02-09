import { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import CardItem from "../../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state/index.js";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  console.log("items: ", items);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const getItems = async () => {
    try {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        {
          method: "GET",
        }
      );
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Out Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{ m: "25px", "& .MuiTabs-flexContainer": { flexWrap: "wrap" } }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="TOP RATED" value="topRated" />
        <Tab label="BEST SELLERS" value="bestSellers" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
      >
        {value === "all" &&
          items.map((item) => (
            <CardItem item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <CardItem item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <CardItem item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <CardItem item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
