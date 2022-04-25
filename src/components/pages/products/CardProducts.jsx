import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useDispatch } from 'react-redux'
// import basket from '../../../assets/basket/basket.png'
import { addToCart } from '../../../store/cartSlice'

export const GlobalStyle = createGlobalStyle`
  body{
background-color:#D4E8A9;
  }
`
export const CardProduct = ({ product }) => {
   const dispatch = useDispatch()
   const handleAddToCart = (e) => {
      e.preventDefault()
      dispatch(addToCart(product))
   }

   return (
      <>
         <GlobalStyle />
         <Wrapper key={product.id}>
            <Container>
               <CardInfo>
                  <CoverImg>
                     <img src={product.image} alt="" />
                  </CoverImg>
                  <TextCard>
                     <h6 className="title">{product.title}</h6>
                     <h6 className="Category">{product.category}</h6>
                     <h4 className="Price">${product.price}</h4>
                     <Button onClick={handleAddToCart} type="button">
                        <h3> BUY</h3>
                     </Button>
                  </TextCard>
               </CardInfo>
            </Container>
         </Wrapper>
      </>
   )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   @media screen and (max-width: 960px) {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`
const Container = styled.div`
   background: #4b965c;
   box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
   width: 280px;
   height: 500px;
   text-decoration: none;
   border-radius: 4px;
   &:nth-child(2) {
      margin: 24px;
   }
   &:hover {
      transform: scale(1.06);
      transition: all 0.3s ease-out;
      color: #1c2237;
   }
   @media screen and (max-width: 960px) {
      width: 90%;
      &:hover {
         transform: none;
      }
   }
`
const CardInfo = styled.div`
   display: flex;
   flex-direction: column;
   height: 500px;
   padding: 24px;
   align-items: center;
   color: #fff;
`
const CoverImg = styled.div`
   margin: 24px 0;
   img {
      width: 260px;
      height: 280px;
      inset: 0;
      transition: transform 3s;
   }
   &:hover img {
      transform: scale(1.06);
      transition: all 0.3s ease-out;
      color: #1c2237;
   }
`
const TextCard = styled.div`
   font-size: 14px;
   margin-bottom: 24px;
   && h4 {
      font-size: 40px;
   }
   && button {
      width: 30px;
      margin: 5px auto;
   }
`
const Button = styled.button`
   border-radius: 4px;
   width: 200px;
   background: ${({ primary }) => (primary ? '#4B59F7' : '#000711')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '12px 50px' : '10px 50px 10px 20px')};
   color: #8feef1;
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;
   &:hover {
      transition: all 0.3s ease-out;
      background: #fff;
      background-color: ${({ primary }) => (primary ? '#5f014b' : '#01662f')};
   }
   @media screen and (max-width: 960px) {
      width: 100%;
   }
`
