// import React from "react";
import styled from "styled-components";
import Carousel from "../../UI/carousel/Carousel";
import yellowTulips from "../../../assets/others/yellowTulips.png";
import redRose from "../../../assets/others/redRose.png";
import rose from "../../../assets/others/rose.png";
import blueCamomile from "../../../assets/others/blueCamomile.png";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    /* background-image: url('https://wallpapers-hub.art/wallpaper-images/497913.jpg'); */
    /* background-image: url('https://image.shutterstock.com/image-illustration/pink-flower-wallpaper-mural-wall-260nw-1817094455.jpg'); */
    background-image: url('https://i0.wp.com/zeeoii.com/wp-content/uploads/2020/07/Pink-Flower-HD-Wallpapers-43970-Baltana.jpg?fit=1024%2C576&ssl=1');
    background-attachment: fixed;
    background-size:cover;
    background-repeat:no-repeat;
}
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  && img {
    padding: 20px;
    width: 150px;
    height: 150px;
  }
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />

      <Div>
        <Carousel>
          <img src={rose} alt="" />
          <img src={yellowTulips} alt="" />
          <img src={redRose} alt="" />
          <img src={blueCamomile} alt="" />
        </Carousel>
      </Div>
    </>
  );
};

export default Home;
