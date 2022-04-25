import styled from 'styled-components'

export const Container = styled.div`
   z-index: 1;
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-right: 50px;
   padding-left: 50px;
   @media screen and (max-width: 991px) {
      padding-right: 30px;
      padding-left: 30px;
   }
`

export const Button = styled.button`
   border-radius: 4px;
   background: ${({ primary }) => (primary ? '#323461' : '#326B61')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '12px 24px' : '10px 10px')};
   color: #fff;
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   & img {
      width: 30px;
   }
   && span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: yellow;
      font-size: 14px;
      font-weight: 700;
      color: black;
   }
   &:hover {
      transition: all 0.3s ease-out;
      background: #fff;
      background-color: ${({ primary }) => (primary ? '#326B61' : '#b3b5ca')};
   }
   @media screen and (max-width: 960px) {
      width: 100%;
   }
`
