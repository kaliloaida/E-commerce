import styled from 'styled-components'
import clothes from '../../../assets/home/clothes.png'
import NewTREND from '../../../assets/home/NewTREND.png'
import COLLUSION from '../../../assets/home/COLLUSION.png'
import trends from '../../../assets/home/trends.png'
import DISCOVER from '../../../assets/home/DISCOVER.png'
import Group from '../../../assets/home/Group.png'
import GroupS from '../../../assets/home/GroupS.png'
import Second from '../../../assets/home/Second.png'
import Footer from '../../../layout/Footer'

const Clothes = styled.div`
   top: 60px;
   position: absolute;
   z-index: -5;
   img {
      width: 100%;
      height: 100%;
   }
`
const TREND = styled.div`
   position: absolute;
   left: 800px;
   top: 400px;
   z-index: -5;
`
const Collusion = styled.div`
   position: absolute;
   left: 800px;
   top: 440px;
   z-index: -5;
`
const Trends = styled.div`
   position: absolute;
   left: 800px;
   top: 510px;
   z-index: -5;
`
const Discover = styled.div`
   position: absolute;
   left: 810px;
   top: 550px;
   padding: 5px;
   background-color: black;
   z-index: -5;
`
const Groups = styled.div`
   position: absolute;
   left: 1000px;
   z-index: -5;
   top: 550px;
`
const Seconds = styled.div`
   position: absolute;
   top: 690px;
   z-index: -5;
   && img {
      width: 100%;
      height: 100%;
   }
`
const Grop = styled.div`
   position: absolute;
   width: 426px;
   height: 182px;
   left: 200px;
   top: 1000px;
   z-index: -5;
`

const Home = () => {
   return (
      <>
         <Clothes>
            <img src={clothes} alt="" />
         </Clothes>
         <TREND>
            <img src={NewTREND} alt="" />
         </TREND>
         <Collusion>
            <img src={COLLUSION} alt="" />
         </Collusion>
         <Trends>
            <img src={trends} alt="" />
         </Trends>
         <Discover>
            <img src={DISCOVER} alt="" />
         </Discover>
         <Groups>
            <img src={Group} alt="" />
         </Groups>
         <hr />
         <Seconds>
            <img src={Second} alt="" />
         </Seconds>
         <Grop>
            <img src={GroupS} alt="" />
         </Grop>
         <Footer />
      </>
   )
}

export default Home
