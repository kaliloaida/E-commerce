import React from "react";
import styled from "styled-components";
import basket from "../../../assets/basket/basket.png";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
export const GlobalStyle = createGlobalStyle`
  body{
background-color:#D4E8A9;
  }
`;
export const CardProduct = ({ product }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(product));
    // navigate.push("/cart");
  };
  // console.log(product);
  return (
    <>
      <GlobalStyle />
      <Wrapper key={product.id}>
        <CoverImg>
          <img src={product.image} alt="" />
        </CoverImg>
        <TextCard>
          <h6 className="title">{product.title}</h6>
          <h6 className="Category">{product.category}</h6>
          <div>
            <p className="Price">${product.price}</p>
            <form>
            <img
              className="basket"
              src={basket}
              alt=""
              onClick={handleAddToCart}
            />
            </form>
           
          </div>
        </TextCard>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 10px 10px 20px 10px;
`;
const CoverImg = styled.div`
  width: 250px;
  height: 300px;
  overflow-clip-margin: initial;
  img {
    width: 260px;
    height: 280px;
    inset: 0;
    transition: transform 3s;
  }
  &:hover img {
    transform: scale(0.5);
  }
`;
const TextCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;

  && div {
    width: 130px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  .basket {
    width: 50px;
    height: 50px;
  }
  .title {
    font-family: "Anek Odia", sans-serif;
    font-family: "Dancing Script", cursive;
    color: #120452;
  }
  .Category {
    font-family: "Anek Odia", sans-serif;
    font-family: "Dancing Script", cursive;
    color: #120452;
    font-weight: 200;
  }
  .Price {
    font-family: "Anek Odia", sans-serif;
    font-family: "Dancing Script", cursive;
    font-family: "Rubik", sans-serif;
    background-color: #b4f1f1;
    padding: 5px;
    font-size: 25px;
    border: 1px solid yellowgreen;
    box-shadow: 1px 1px 2px #36d792;
  }
`;
