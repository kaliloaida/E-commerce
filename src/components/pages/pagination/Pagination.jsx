import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export const Pagination = ({ onPageChange, totalPosts, postsPerPage }) => {
   const pageNumbers = []
   // eslint-disable-next-line no-unused-vars
   const [searchParams, setSearchParams] = useSearchParams()
   const numberPage = searchParams.get('page')
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
      pageNumbers.push(i)
   }

   return (
      <Container>
         {pageNumbers.map((page) => (
            <Button
               isActive={numberPage === String(page)}
               key={Math.random()}
               onClick={() => onPageChange(page)}
            >
               {page}
            </Button>
         ))}
      </Container>
   )
}
const Container = styled.div`
   display: flex;
`

export const Button = styled.button`
   border-radius: 50px;
   border: none;

   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
   cursor: pointer;
   font-size: 16px;
   font-weight: 700;
   padding: 15px 60px;

   background: ${(props) => (props.isActive ? '#2bd66d' : '#6f816f')};
   color: ${({ color }) => color || '#333'};
   &:hover {
      opacity: 0.9;
      transform: scale(0.98);
      border-radius: 0.3rem;
      a {
         color: black;
      }
   }
`
