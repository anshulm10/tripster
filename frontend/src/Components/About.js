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

const About = (props) => {
    return (
        <>
        <Grid>
            <Aboutimg>
                <img src="https://cdn.dribbble.com/userupload/10528217/file/original-a13b729d85172932cdf365c37066bca4.jpg?resize=1200x669"
                alt="About Us"
                ></img>
                <span>About Us</span>
            </Aboutimg>
            <Container>
                <h1>What is Tourify?</h1>
                <p>Your ultimate travel companion for crafting unforgettable adventures! Here at Tourify, we're on a mission to revolutionize the way you plan your trips. Gone are the days of endless scrolling through countless hotel options and mapping out your itinerary. With Tourify, you simply jot down all the hotspots you're itching to explore in your dream destination, and voilà! We'll do the rest, handpicking the perfect hotels strategically located near your must-see attractions. Say goodbye to wasted travel time and hello to more moments making memories. Let's turn your wanderlust into wonderlust with Tourify!</p> 
            </Container>
            <ContainerIMG>
                <h1>Meet The Team !</h1>
                <CircleGridContainer>
                    <CircleImageHolder>
                        <img 
                        src={aryanimg}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Aryan Dhotre</h2>
                            <p>Lead Backend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                        src={jehanimg}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Jehan Desai</h2>
                            <p>Lead Backend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img
                            // style={{width: "230px", height: "235px"}} 
                            src={granthimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Granth Naik</h2>
                            <p>Lead Frontend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                        src={ahanaimg}
                        alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Ahana Dubey</h2>
                            <p>Research Lead</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={anshulimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Anshul Mahajan</h2>
                            <p>Frontend Dev</p>
                        </Description>
                    </CircleImageHolder>
                </CircleGridContainer>
            </ContainerIMG>
            <ContainerIMG>
                <h1>Meet The Team !</h1>
                <CircleGridContainer>
                    <CircleImageHolder>
                        <img 
                            src={vamsiimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Vamsi Pulipati</h2>
                            <p>Frontend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={omkarimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Omkar Kadle</h2>
                            <p>Frontend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={anishimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Anish Shiekh</h2>
                            <p>Backend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={abhayimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Abhay Dewaki</h2>
                            <p>Backend Dev</p>
                        </Description>
                    </CircleImageHolder>
                    <CircleImageHolder>
                        <img 
                            src={shravimg}
                            alt="Mr No Emo"
                        ></img>
                        <Description>
                            <h2>Shravani</h2>
                            <p>Frontend Dev</p>
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
  margin-bottom: 140vw;
`;

const Aboutimg = styled.div`
    height: 124vh;
    width: 100%;
    padding-top: 55px;
    margin-left: 0px;
    margin-right: 50px;
    /* background-color: rgb(194, 51, 115); */
    background-color: rgb(61, 131, 97);
    /* background-color: rgb(127, 233, 222); */
    /* background-color: rgb(163, 210, 202); */
    /* background-color: rgb(255, 169, 82); */
    /* border: 1px solid;
    border-color: #f6635c; */
    border-radius: 10px;
    img {
        position: relative;
        width: 90vw;
        border-radius: 10px;
        margin-top: -15px;
        
    }
    span {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: -49.5vw;
        /* color: #ffccc4; */
        color: #1C6758;
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
  /* background-color: rgb(246, 99, 92); */
  background-color: rgb(214, 205, 164);
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
  /* background-color: rgb(246, 99, 92); */
  background-color: rgb(214, 205, 164);
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
  /* background-color: #FFBA86;  */
  background-color: #EEF2E6;
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
        border: 5px solid #1C6758;
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