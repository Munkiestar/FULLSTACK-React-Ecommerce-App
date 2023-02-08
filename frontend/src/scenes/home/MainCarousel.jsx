import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// imports all images from assets folder
// const importAll = (r) =>
//   r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
//   }, {});

// console.log("heroTextureImports:", heroTextureImports);
const MainCarousel = () => {
  const inNonMobile = useMediaQuery("(min-width: 600px)");

  // const heroTextureImports = importAll(
  //   requireComponents("../../assets", false, /\.(png|jpe?g|svg)$/)
  // );
  return (
    <Carousel
      infinitLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {/*{Object.values(heroTextureImports).map((texture, ind) => (*/}
      {/*  <Box key={`carousel-image-${ind}`}>*/}
      {/*    <img*/}
      {/*      src={texture}*/}
      {/*      alt={`carousel-${ind}`}*/}
      {/*      style={{*/}
      {/*        width: "100%",*/}
      {/*        height: "700px",*/}
      {/*        objectFit: "cover",*/}
      {/*        backgroundAttachment: "fixed",*/}
      {/*      }}*/}
      {/*    />*/}
      {/*    <Box*/}
      {/*      color="white"*/}
      {/*      padding="20px"*/}
      {/*      borderRadius="1px"*/}
      {/*      textAlign="left"*/}
      {/*      backgroundColor="rgb(0,0,0,.4)"*/}
      {/*      position="absolute"*/}
      {/*      top="46%"*/}
      {/*      left={inNonMobile ? "10%" : "0"}*/}
      {/*      right={inNonMobile ? undefined : "0"}*/}
      {/*      margin={inNonMobile ? undefined : "0 auto"}*/}
      {/*      maxWidth={inNonMobile ? undefined : "240px"}*/}
      {/*    >*/}
      {/*      <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>*/}
      {/*      <Typography variant="h1">Summer Sale </Typography>*/}
      {/*      <Typography*/}
      {/*        fontWeight="bold"*/}
      {/*        color={shades.secondary[300]}*/}
      {/*        sx={{ textDecoration: "underline" }}*/}
      {/*      >*/}
      {/*        Discover More*/}
      {/*      </Typography>*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*))}*/}
    </Carousel>
  );
};

export default MainCarousel;
