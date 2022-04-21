import React from 'react'
import styled from 'styled-components'
import bye from '../assets/footer/bye.png'
import hey from '../assets/footer/hey.png'
import hello from '../assets/footer/hello.png'

const Hey = styled.div`
   position: absolute;
   top: 1320px;
   z-index: -5;
   && img {
      width: 100%;
      height: 100%;
   }
`
const Bye = styled.div`
   position: absolute;
   left: 100px;
   top: 1400px;
   z-index: -5;
`
const Hello = styled.div`
   position: absolute;
   left: 700px;
   top: 1400px;
   z-index: -5;
`
const Rectangles = styled.div`
   position: absolute;
   width: 100%;
   height: 23px;
   top: 1830px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 22px;
   color: #22262a;
   background-color: #f2f8fc;
`
const Footer = () => {
   return (
      <div>
         <Hey>
            <img src={hey} alt="" />
         </Hey>
         <Bye>
            <img src={bye} alt="" />
         </Bye>

         <Hello>
            <img src={hello} alt="" />
         </Hello>
         <Rectangles>
            <p>Copyright © 2022 . Your company name All rights reserved</p>
         </Rectangles>
      </div>
   )
}

export default Footer
