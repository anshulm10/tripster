import styled from "styled-components";
import headimg from '../Images/logo.png'
import { useEffect, useState } from "react";

const Header = (props) => {

  const[scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    if(window.scrollY > 190){
      setScrolling(true);
    }else{
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })


  return (
  
    <Nav scrolling={scrolling}>
      <Logo>
                <a href="/">
                    <Helog src = {headimg} />
                </a>
      </Logo>
      <NavMenu>
        
          <a href="/" class="active">
            <span>Home</span>
          </a>
          <a href="/planner">
            <span>Planner</span>
          </a>
          <a href="/about">
            <span>About Us</span>
          </a>
          <a href="/india">
            <span>India</span>
          </a>
          <a href="/feedback">
            <span>Feedback</span>
          </a>
        
      </NavMenu>
    </Nav>

    
    
  );
};



const Logo = styled.a`
    padding: 0;
    margin-top: 0px;
    max-height: 127px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        
        
    }
    
`

const Helog = styled.img`
    width: 200px;
    
`

const Nav = styled.nav`
  position: fixed;
  left: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 1px solid;
  border-radius: 50px;
  /* border-color: #c23373; */
  border-color: #1C6758;
  /* border-color: #7FE9DE;  */
  /* border-color: #A3D2CA; */
  /* border-color: #C7FFD8; */
  /* border-color: #FFE79A; */
  /* background-color: rgba(194, 51, 115, 0.5); */
  background-color: ${(props) => (props.scrolling ? 'rgba(61, 131, 97)' : 'rgba(61, 131, 97, 0.0)')};
  /* background-color: rgb(127, 233, 222, 0.6); */
  /* background-color: rgb(163, 210, 202, 0.7); */
  /* background-color: rgb(255, 231, 154, 0.8); */
  padding: 0 20px; /* Adjust padding as needed */
  width: 50%;
  z-index: 1;
  margin: 0 auto;
  margin-top: 10px;
  transition: background-color 0.98s ease;
  
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
  /* font-weight: bold; */

  a{
        display: flex;
        align-items: center;
        padding: 0 10px;
        text-decoration: none;
        span{
        color: rgb(249, 249, 249);
        font-size: 16px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

            &:before{
                background-color: rgb(255, 97, 0, 1);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1;
            
            
            }
        }
       
    }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
