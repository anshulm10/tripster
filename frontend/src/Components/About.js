import styled from "styled-components";
import aryanimg from "../Images/Aryan.jpg"
import jehanimg from "../Images/Jehan.png"
import granthimg from "../Images/Granth.jpg"
import ahanaimg from "../Images/Ahana.jpg"
import anshulimg from "../Images/Anshul.jpg"
import vamsiimg from "../Images/Vamsi.jpg"
import omkarimg from "../Images/Omkar.jpg"
import anishimg from "../Images/Anish.jpg"
import shravimg from "../Images/Shravani.jpg"
import abhayimg from "../Images/Abhay.jpg"
import placeholder from "../Images/placeholder.png"

const About = (props) => {
    return (
        <>
        <Grid>
            <Aboutimg>
                <img src="https://cdn.dribbble.com/userupload/8092260/file/original-159038e8448b6bc7b05b8b69bc3dab72.png?resize=1200x900"
                alt="About Us"
                ></img>
                <span>About Us</span>
            </Aboutimg>
            <Container>
                <h1>What is Tripster?</h1>
                <p>Your ultimate travel companion for crafting unforgettable adventures! Here at Tripster, we're on a mission to revolutionize the way you plan your trips. Gone are the days of endless scrolling through countless hotel options and mapping out your itinerary. With Tripster, you simply jot down all the hotspots you're itching to explore in your dream destination, and voilà! We'll do the rest, handpicking the perfect hotels strategically located near your must-see attractions. Say goodbye to wasted travel time and hello to more moments making memories. Let's turn your wanderlust into wonderlust with Tripster!</p> 
            </Container>
            <ContainerIMG>
                <h1>Meet The Team !</h1>
                <CircleGridContainer>
                    <CircleImageHolder>
                        <img 
                        src={placeholder}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Text</h2>
                            <p>Text</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                        src={placeholder}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Text</h2>
                            <p>Text</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img
                            // style={{width: "230px", height: "235px"}} 
                            src={placeholder}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Text</h2>
                            <p>Text</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                        src={placeholder}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Text</h2>
                            <p>Text</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={placeholder}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Text</h2>
                            <p>Text</p>
                        </Description>
                    </CircleImageHolder>
                </CircleGridContainer>
            </ContainerIMG>
        </Grid>
        
        <Footer />
        </>
  )
}


const Grid = styled.div`
  display: grid;
  gap: 90px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  height: 100vh;
  justify-content: center;
  padding-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 120vw;
`;

const Aboutimg = styled.div`
    height: 145vh;
    width: 100%;
    padding-top: 55px;
    margin-left: 0px;
    margin-right: 50px;
    background-color: rgb(194, 51, 115);
    /* background-color: rgb(61, 131, 97); */
    /* background-color: rgb(127, 233, 222); */
    /* background-color: rgb(163, 210, 202); */
    /* background-color: rgb(255, 169, 82); */
    /* border: 1px solid;
    border-color: #f6635c; */
    border-radius: 10px;
    img {
        position: relative;
        width: 80vw;
        border-radius: 10px;
        margin-top: -15px;
        
    }
    span {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: -55vw;
        color: #ffccc4;
        /* color: #1C6758; */
        /* color: #FFEBAD; */
        /* color: #E8DED2; */
        /* color: #EF5A5A; */
        font-size: 5vw;
        letter-spacing: 20px;
        font-family: "Lora", serif;
        z-index: 1;
    } 
`   
const Container = styled.div`
  padding-top: 0px;
  width: 100%;
  border-radius: 10px;
  height: 58vh;
  background-color: rgb(246, 99, 92);
  /* background-color: rgb(214, 205, 164); */
  /* background-color: rgb(255, 246, 191); */
  /* background-color: rgb(94, 170, 168); */
  /* background-color: rgb(255, 231, 154); */
  margin-bottom: auto;
  h1{
    font-family: "Quicksand", sans-serif;
  }
  p{
    padding: 30px 50px;
    font-family: "Quicksand", sans-serif;
    font-size: 25px;
    text-align: justify;
  }
`;

const ContainerIMG = styled.div`
  padding-top: 0px;
  width: 100%;
  border-radius: 10px;
  height: 70vh;
  background-color: rgb(246, 99, 92);
  /* background-color: rgb(214, 205, 164); */
  /* background-color: rgb(255, 246, 191); */
  /* background-color: rgb(94, 170, 168); */
  /* background-color: rgb(255, 231, 154); */
  margin-bottom: auto;
  h1{
    font-family: "Quicksand", sans-serif;
  }
  p{
    /* padding: 30px 50px; */
    font-family: "Quicksand", sans-serif;
    font-size: 25px;
  }
`;

const Footer = styled.footer`
  background-color: #FFBA86; 
  /* background-color: #EEF2E6; */
  /* background-color: #FFEBAD; */
  /* background-color: #056676; */
  /* background-color: #EF5A5A; */
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0; /* Top-left and top-right curved edges */
  text-align: center;
  
`;

const CircleGridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  
`;

const CircleImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    overflow: hidden;
    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 5px solid #79155B;
    }
  }
`;

const Description = styled.div`
  margin-top: -20px;
  text-align: center;
  p{
    font-size: 25px;
  }
  
  color: black;
`;

export default About