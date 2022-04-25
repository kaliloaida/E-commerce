import React from 'react'
import styled from 'styled-components'
import modalka from '../../../assets/modalka/modalka.gif'

const Div = styled.div`
   background-color: yellow;
   box-shadow: 0 2px 8px black;
   border-radius: 10px;
   align-items: center;
   margin: 0 auto;
   position: fixed;
   top: 20vh;
   left: 30%;
   width: 30%;
   z-index: 100;
   overflow: hidden;
   padding: 50px;
   && img {
      width: 300px;
   }
`
const Button = styled.button`
   padding-top: 20px;
   border-radius: 4px;
   background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
   color: #fff;
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;
   &:hover {
      transition: all 0.3s ease-out;
      background: #fff;
      background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
   }
   @media screen and (max-width: 960px) {
      width: 100%;
   }
`
const BackdropModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 20;
   background-color: rgba(0, 0, 0, 0.75);
`

const Modal = (props) => {
   return (
      <BackdropModal>
         <Div>
            <img src={modalka} alt="" />
            <h1>Your purchase was successfully processed!</h1>
            <br />
            <Button type="button" onClick={props.yes}>
               OK
            </Button>
         </Div>
      </BackdropModal>
   )
}

export default Modal
