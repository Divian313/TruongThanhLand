import IMGup from "./up-arrow.png"
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
const Button = styled.div`
    /* position: fixed;
    bottom: 20px;
    right: 20px; */
    /* background-color: #333; */
    /* color: #fff;
    padding: 10px 20px;
    border-radius: 5px; */
    cursor: pointer;
    display: none;
    z-index: 1000;
`
const GoToTopButton = () => {
  const buttonRef = useRef(null);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Button onClick={handleClick} ref={buttonRef}>
      <img width={"100%"} src={IMGup} alt="" srcset="" />
  </Button>;
}

export default GoToTopButton;