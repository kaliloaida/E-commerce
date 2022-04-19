import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
   background-color: antiquewhite;
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
`
const Button = styled.div`
   align-items: flex-end;
   display: flex;
   justify-content: space-around;
   width: 200px;
   margin: 20px 10px 20px 200px;
   color: blueviolet;
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
         <Div onClick={props.cancel}>
            <h1>Are you sure leave this page? </h1>
            <Button>
               <button type="button" onClick={props.yes}>
                  Yes
               </button>
               <button type="button" onClick={props.cancel}>
                  Cancel
               </button>
            </Button>
         </Div>
      </BackdropModal>
   )
}

export default Modal
