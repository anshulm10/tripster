import styled from "styled-components";

const Feedback = (props) => {
    return(
        <>
        <Grid>
            <Feedimg>
                <img src="https://cdn.dribbble.com/userupload/10815059/file/original-950d3de089a9262e9e285f08ce124f63.png?resize=1200x900">

                </img>
                <span>Feedback</span>
            </Feedimg>
            <Container>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScR8PdGxK_57Qs6XfKj1tlJOiWJT0KZ7101AlfG0r-lVMlAtg/viewform?embedded=true" width="640" height="788" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>
            </Container>
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
  margin-bottom: 85vw;
`;

const Feedimg = styled.div`
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
        height: 52vw;
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
        margin-top: -45vw;
        color: rgb(194, 51, 115);
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
  height: 115vh;
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

export default Feedback ;