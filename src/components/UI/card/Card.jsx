import styled from 'styled-components'

const Wrapper = styled.div`
   background-color: #ffffff;
   box-shadow: 0px 10px 20px #d057d4f5;
   border-radius: 20px;
   max-width: 1000px;
   margin: 60px auto;
`

const Card = (props) => {
   return <Wrapper>{props.children}</Wrapper>
}
export default Card
