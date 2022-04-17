import React from "react";
import styled from "styled-components";

import { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MainContainer = styled.div`
  margin-top: 100px;
  /* background-color: #61D7A4; */
  height: 500px;
  width: 600px;
  display: flex;
  align-items: center;
  box-shadow: 5px 2px 2px 8px #36d792;
  border: 2px solid #00af64;
  border-radius: 20px;
  .over {
    cursor: pointer;
    background-color: #36d792;
  }
`;
const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const AllPages = styled.div`
  height: 100%;
  display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;


const PAGE_WIDTH = 600;

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: "100%",
          },
        });
      })
    );
  }, []);

  return (
    <MainContainer>
      <FaChevronLeft className="over" onClick={handleLeftArrowClick} />
      <Window>
        <AllPages style={{ transform: `translateX(${offset}px)` }}>
          {pages}
        </AllPages>
      </Window>
      <FaChevronRight className="over" onClick={handleRightArrowClick} />
    </MainContainer>
  );
};

export default Carousel;
