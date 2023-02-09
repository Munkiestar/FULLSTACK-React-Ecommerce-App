import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

import img1 from "../../assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";
import img2 from "../../assets/toa-heftiba-dti56waifB4-unsplash.jpeg";
import img3 from "../../assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg";
import img4 from "../../assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import img5 from "../../assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
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
      <Box
      // key={`carousel-image-${ind}`}
      >
        <img
          src={img1}
          // alt={`carousel-${ind}`}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="left"
          backgroundColor="rgb(0,0,0,.4)"
          position="absolute"
          top="46%"
          left={inNonMobile ? "10%" : "0"}
          right={inNonMobile ? undefined : "0"}
          margin={inNonMobile ? undefined : "0 auto"}
          maxWidth={inNonMobile ? undefined : "240px"}
        >
          <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>
          <Typography variant="h1">Summer Sale </Typography>
          <Typography
            fontWeight="bold"
            color={shades.secondary[300]}
            sx={{ textDecoration: "underline" }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>
      <Box
      // key={`carousel-image-${ind}`}
      >
        <img
          src={img2}
          // alt={`carousel-${ind}`}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="left"
          backgroundColor="rgb(0,0,0,.4)"
          position="absolute"
          top="46%"
          left={inNonMobile ? "10%" : "0"}
          right={inNonMobile ? undefined : "0"}
          margin={inNonMobile ? undefined : "0 auto"}
          maxWidth={inNonMobile ? undefined : "240px"}
        >
          <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>
          <Typography variant="h1">Summer Sale </Typography>
          <Typography
            fontWeight="bold"
            color={shades.secondary[300]}
            sx={{ textDecoration: "underline" }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>
      <Box
      // key={`carousel-image-${ind}`}
      >
        <img
          src={img3}
          // alt={`carousel-${ind}`}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="left"
          backgroundColor="rgb(0,0,0,.4)"
          position="absolute"
          top="46%"
          left={inNonMobile ? "10%" : "0"}
          right={inNonMobile ? undefined : "0"}
          margin={inNonMobile ? undefined : "0 auto"}
          maxWidth={inNonMobile ? undefined : "240px"}
        >
          <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>
          <Typography variant="h1">Summer Sale </Typography>
          <Typography
            fontWeight="bold"
            color={shades.secondary[300]}
            sx={{ textDecoration: "underline" }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>
      <Box
      // key={`carousel-image-${ind}`}
      >
        <img
          src={img4}
          // alt={`carousel-${ind}`}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="left"
          backgroundColor="rgb(0,0,0,.4)"
          position="absolute"
          top="46%"
          left={inNonMobile ? "10%" : "0"}
          right={inNonMobile ? undefined : "0"}
          margin={inNonMobile ? undefined : "0 auto"}
          maxWidth={inNonMobile ? undefined : "240px"}
        >
          <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>
          <Typography variant="h1">Summer Sale </Typography>
          <Typography
            fontWeight="bold"
            color={shades.secondary[300]}
            sx={{ textDecoration: "underline" }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>
      <Box
      // key={`carousel-image-${ind}`}
      >
        <img
          src={img5}
          // alt={`carousel-${ind}`}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="left"
          backgroundColor="rgb(0,0,0,.4)"
          position="absolute"
          top="46%"
          left={inNonMobile ? "10%" : "0"}
          right={inNonMobile ? undefined : "0"}
          margin={inNonMobile ? undefined : "0 auto"}
          maxWidth={inNonMobile ? undefined : "240px"}
        >
          <Typography color={shades.secondary[200]}>--NEW ITEMS </Typography>
          <Typography variant="h1">Summer Sale </Typography>
          <Typography
            fontWeight="bold"
            color={shades.secondary[300]}
            sx={{ textDecoration: "underline" }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>
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
