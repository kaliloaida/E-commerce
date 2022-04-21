import React from 'react'
import styled from 'styled-components'

export const Pagination = ({ onPageChange, totalPosts, postsPerPage }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
      pageNumbers.push(i)
   }

   return (
      <Container>
         {pageNumbers.map((page) => (
            <PageItem key={Math.random()} onClick={() => onPageChange(page)}>
               {page}
            </PageItem>
         ))}
      </Container>
   )
}
const Container = styled.div`
   display: flex;
`
const PageItem = styled.div`
   width: 30px;
   height: 20px;
   background: silver;
   color: white;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 10px;
`
