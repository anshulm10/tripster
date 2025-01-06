  import React, { useState } from "react";
  import styled from "styled-components";
  import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  import ReactMarkdown from "react-markdown"
  import axios from "axios";

  const Planner = (props) => {
    const [mapUrl, setMapUrl] = useState('');
    const [spotsURL, setSpotsUrl] = useState('')
    const [chatOpen, setChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatResponse, setChatResponse] = useState('');
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const handleChatOpen = () => setChatOpen(true);
    const handleChatClose = () => setChatOpen(false);

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    
    const handleChatSubmit = async () => {
      try {
        // Initialize the GoogleGenerativeAI client with your API key
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        // Generate content based on the user's input
        const result = await model.generateContent(chatInput);
        setChatResponse(result.response.text);
      } catch (error) {
        console.error("Error fetching chatbot response:", error);
        setChatResponse("Error connecting to the chatbot.");
      }
    };

    return (
      <>
        <Grid>
          <Container>
            <h1>Plan Your Amazing Trip !</h1>
            <InputFields setMapUrl={setMapUrl} setSpotsUrl={setSpotsUrl}/>
          </Container>
          {/* <TempImg>
          <img
            src="https://cdn.dribbble.com/users/59947/screenshots/17006879/media/102a4edaac3eda5c7f1fc5d7e21a5b50.jpg?resize=1000x750&vertical=center"
            
            alt="Welcome"
          ></img>
          <span>Travel</span>
        </TempImg> */}
          <Map> 
            <iframe
              style={{width: "70vw", height: "65vw", borderRadius: '10px'}}
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={mapUrl}
            />
          </Map>
          <Map>
            <iframe
              style={{width: "70vw", height: "65vw", borderRadius: '10px'}}
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={spotsURL}
            />
          </Map>
          <ChatButton onClick={handleChatOpen}>Chat with Us</ChatButton>
        </Grid>
        <Dialog open={chatOpen} onClose={handleChatClose}>
          <DialogTitle>Chat with our Bot</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Ask your question..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            
            <ReactMarkdown>{chatResponse}</ReactMarkdown>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleChatClose} color="secondary">Close</Button>
            <Button onClick={handleChatSubmit} color="primary">Send</Button>
          </DialogActions>
        </Dialog>
        <Footer />
      </>
    );
  };

  const InputFields = ({ setMapUrl, setSpotsUrl }) => {
    const [inputs, setInputs] = useState([{ key: 1, value: "" }]);
    const [additionalInput, setAdditionalInput] = useState('');
    const [formData, setFormData] = useState([]);

    const handleAdditionalInputChange = (event) => {
      setAdditionalInput(event.target.value);
    };
    

    const handleInputChange = (index, event) => {
      const values = [...inputs];
      values[index].value = event.target.value;
      setInputs(values);
    };

    const handleAddInput = () => {
      if (inputs.length < 10) {
        const values = [...inputs];
        values.push({ key: values.length + 1, value: "" });
        setInputs(values);
      }
    };

    const handleDeleteInput = (index) => {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
    };

    const handleSubmit = async () => {
      const formData = inputs.map((input) => input.value).filter((value) => value.trim() !== "");
      setFormData(formData);
      const types = inputs.map((input) => input.type);
    
      const data = {
        places: formData,
        time: Date.now(),
        type: additionalInput.trim() !== "" ? additionalInput : null,
      };

      try {
        // Send data to Flask API
        const response = await axios.post("http://127.0.0.1:5000/submit", data);
        const mapURL = response.data.map;
        const spotsURL = response.data.spots;
        console.log("Map URL received:", mapURL);
        console.log("Map URL Got:", spotsURL);
        setMapUrl(mapURL);
        setSpotsUrl(spotsURL);
        console.log("Data sent successfully:", data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };

    return (
      <>
        {inputs.map((input, index) => (
          <InputWrapper key={input.key}>
            <StyledInput
              type="text"
              placeholder={`Input ${input.key}`}
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
            />
            {inputs.length > 1 && <DeleteButton onClick={() => handleDeleteInput(index)}>✖️</DeleteButton>}
          </InputWrapper>
        ))}
        {inputs.length < 10 && <AddButton onClick={handleAddInput}>+</AddButton>}
        <TypeInput
          type="text"
          placeholder="Hotels or restaurants or cafe"
          value={additionalInput}
          onChange={handleAdditionalInputChange}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </>
    );
  };

  const ChatButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #79155B;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: #a12280;
    }
  `;

  const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const StyledInput = styled.input`
    margin-right: 5px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  `;

  const TypeInput = styled.input`
    margin-right: 5px;
    padding: 8px;
    border-radius: 5px;
    width: 13%;
    border: 1px solid #ccc;
  `;

  const AddButton = styled.button`
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #79155B;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  `;

  const DeleteButton = styled.button`
    padding: 4px 8px;
    border-radius: 50%;
    background-color: rgb(246, 99, 92);
    color: white;
    border: none;
    cursor: pointer;
  `;

  const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #79155B;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 2vw;
  `;

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
    margin-bottom: 150vw;
  `;

  const Map = styled.div`
    height: 160vh;
    width: 100%;
    padding-top: 55px;
    margin-left: 0px;
    margin-right: 50px;
    background-color: rgb(194, 51, 115);
    border-radius: 10px;
    img {
      position: relative;
      width: 90vw;
      border-radius: 10px;
      margin-top: -15px;
    }
  `;

  const Container = styled.div`
    padding-top: 50px;
    width: 100%;
    border-radius: 10px;
    height: auto;
    background-color: rgb(246, 99, 92);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Quicksand", sans-serif;
    }
  `;

  const TempImg = styled.div`
    height: 160vh;
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

  const Footer = styled.footer`
    background-color: #FFBA86; 
    color: white;
    padding: 20px;
    border-radius: 20px 20px 0 0;
    text-align: center;
  `;

  export default Planner;