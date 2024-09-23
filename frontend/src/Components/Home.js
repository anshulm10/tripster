import styled from "styled-components";
import lord from "../Images/popo.jpg"

// Main Theme - https://mir-s3-cdn-cf.behance.net/project_modules/hd/de2a4086105697.5d8f947f95953.jpg
// Deep forrest theme - https://wallpapercave.com/wp/wp2003022.jpg
// Beach theme - https://cdn.dribbble.com/users/63407/screenshots/17441772/media/f37e7f65ff37ee83e4e10a8183659fa2.png?resize=1000x750&vertical=center
// Village - https://cdn.dribbble.com/userupload/9442456/file/original-21a6118bea89f3f1a41ffca607e2d023.png?resize=1200x900
// Tourist - https://cdn.dribbble.com/users/63407/screenshots/10749842/media/c4dc04f82f6bb3297197d297270d5db9.png?resize=800x600&vertical=center

const Home = (props) => {
  return (
    <>
    <Grid>
      <Himg>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/de2a4086105697.5d8f947f95953.jpg"
          
          alt="Welcome"
        ></img>
        <span>Travel</span>
      </Himg>
      <Container>
        <CircleImagesContainer>

        <a href="/about">
          <CircleImageHolder>
            <img
              src="https://cdn.dribbble.com/userupload/13440218/file/original-d9fbcee810c6a9854d11416013461343.png?resize=1200x1250"
              alt="Mr No Emo"
            ></img>
            <Description>Path Pioneers</Description>
          </CircleImageHolder>
          </a>

        <a href="/planner">  
          <CircleImageHolder>
            <img
              src="https://cdn.dribbble.com/users/911415/screenshots/15726079/media/3116143ebeaa0f7234635823bcd3e946.png?resize=1000x750"
              alt="Circle Image 2"
            ></img>
            <Description>"Just Tripster :)"</Description>
          </CircleImageHolder>
          </a>

        <a href="/india">
          <CircleImageHolder>
            <img
              src="https://cdn.dribbble.com/users/1985123/screenshots/18579103/media/c202c8aa3c557387761ba476e04b3f4e.jpg?resize=800x600&vertical=center"
              alt="Circle Image 3"
            ></img>
            <Description>"Local Treasures"</Description>
          </CircleImageHolder>
          </a>
        </CircleImagesContainer>
      </Container>
      
    </Grid>
    <Footer />
    </>
  );
};


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
  margin-bottom: 60vw;
`;

const Himg = styled.div`
  height: 124vh;
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
    margin-top: -50vw;
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
`;

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  border-radius: 10px;
  height: 55vh;
  background-color: rgb(246, 99, 92);
  /* background-color: rgb(214, 205, 164); */
  /* background-color: rgb(255, 246, 191); */
  /* background-color: rgb(94, 170, 168); */
  /* background-color: rgb(255, 231, 154); */
`;

const CircleImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  a{
    text-decoration: none;
  }
  
  /* width: 100%; */
`;

const CircleImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;

    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 5px solid #c23373;
    }
  }
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  color: #79155B;
  font-weight: bold;
  text-decoration: none;
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

export default Home;
