import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { getAsyncProducts } from '../../../store/productSlice'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner'
import { CardProduct } from './CardProducts'
import { Pagination } from '../pagination/Pagination'

export const Products = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const getCurrentPage = searchParams.get('page')

   const { products, isLoading } = useSelector((state) => state.product)
   const [currentPage, setCurrentPage] = useState(getCurrentPage || 1)
   const [productPerPage] = useState(4)

   useEffect(() => {
      dispatch(getAsyncProducts())
   }, [searchParams])

   useEffect(() => {
      setSearchParams({ page: currentPage })
   }, [currentPage, setSearchParams])

   const indexOfLastPost = currentPage * productPerPage
   const indexOfFirstPost = indexOfLastPost - productPerPage
   const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

   const changePageHandler = (pageNumber) => {
      setCurrentPage(pageNumber)
      setSearchParams({ page: pageNumber })
   }

   const renderProducts = () => {
      return currentPosts.map((product) => {
         return <CardProduct key={Math.random()} product={product} />
      })
   }
   return (
      <>
         <Cards>{isLoading ? <LoadingSpinner /> : renderProducts()}</Cards>
         <PaginationContainer>
            <Pagination
               onPageChange={changePageHandler}
               totalPosts={products.length}
               postsPerPage={productPerPage}
            />
         </PaginationContainer>
      </>
   )
}
const Cards = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: 50px auto;
   @media screen and (max-width: 960px) {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`
const PaginationContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 50px;
`
