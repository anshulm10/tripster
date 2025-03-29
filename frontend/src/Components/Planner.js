import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AdvancedMarker, APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, 
  FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel 
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import jsPDF from "jspdf";

const Planner = (props) => {
  // Existing states
  const [central, setCentral] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  const [spotsURL, setSpotsUrl] = useState('');
  const [hotelsList, setHotelsList] = useState([]); // Lodging list from backend
  const [otherPlaces, setOtherPlaces] = useState([]); // Other types (restaurants, cafes, etc.)
  
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  // New state to capture the visiting spots from InputFields
  const [visitingSpots, setVisitingSpots] = useState([]);
  // New state to hold the place type (from additional input)
  const [placeType, setPlaceType] = useState("");

  // Itinerary dialog states
  const [itineraryOpen, setItineraryOpen] = useState(false);
  const [itineraryDays, setItineraryDays] = useState('');
  const [itineraryHotel, setItineraryHotel] = useState('');
  const [itineraryMeals, setItineraryMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false
  });
  const [itineraryResponse, setItineraryResponse] = useState('');
  const itineraryRef = useRef(null);

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const mapIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Chat Bot handlers (unchanged)
  const handleChatOpen = () => setChatOpen(true);
  const handleChatClose = () => setChatOpen(false);

  const handleChatSubmit = async () => {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      const result = await model.generateContent(chatInput);
      setChatResponse(result.response.text);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setChatResponse("Error connecting to the chatbot.");
    }
  };

  // Itinerary Dialog handlers
  const handleItineraryOpen = () => setItineraryOpen(true);
  const handleItineraryClose = () => setItineraryOpen(false);

  const handleItinerarySubmit = async () => {
    try {
      const meals = Object.keys(itineraryMeals)
        .filter(meal => itineraryMeals[meal])
        .join(', ') || "None";
      const query = `
        Create a ${itineraryDays}-day travel itinerary with budget and total summary at the end, for everything including stay.
        The user has chosen to stay at "${itineraryHotel}".
        Meal preferences: ${meals}, when suggesting meals provide ratings too.
        Desired visiting spots: ${visitingSpots.join(", ")}.
        Also suggest nearby places to visit if time permits. Make it to the point yet informative.
      `;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      const result = await model.generateContent(query);
      setItineraryResponse(result.response.text);
      setItineraryOpen(false);
    } catch (error) {
      console.error("Error generating itinerary:", error);
      setItineraryResponse("Error generating itinerary, please try again.");
    }
  };

  const downloadPDF = () => {
    if (!itineraryRef.current) {
      console.error("Itinerary element not found.");
      return;
    }
    const doc = new jsPDF();
    doc.html(itineraryRef.current, {
      callback: function (doc) {
        doc.save("itinerary.pdf");
      },
      x: 2,
      y: 3,
      width: 390,
      html2canvas: { scale: 0.139 }
    });
  };

  return (
    <>
      <Grid>
        <Container>
          <h1>Plan Your Amazing Trip!</h1>
          <InputFields 
            setMapUrl={setMapUrl} 
            setSpotsUrl={setSpotsUrl} 
            setCentral={setCentral} 
            setHotelsList={setHotelsList}
            setOtherPlaces={setOtherPlaces}
            setVisitingSpots={setVisitingSpots}
            setPlaceType={setPlaceType}
          />
        </Container>
        {/* Embedded iframe map */}
        <Maps> 
          <iframe
            style={{ width: "70vw", height: "65vw", borderRadius: '10px' }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
          />
        </Maps>
        {/* Interactive Google Map */}
        <Maps>
          <APIProvider apiKey='AIzaSyBZN9GtiYoaycPRr2ScMrU8tbOv9eDz3oY'>
            <Map
              key={central ? `map-${central[0]}-${central[1]}` : "map-default"}
              style={{ width: "70vw", height: "65vw", borderRadius: "10px", margin: "auto" }}
              defaultCenter={central ? { lat: central[0], lng: central[1] } : { lat: -33.860664, lng: 151.208138 }}
              defaultZoom={14}
              gestureHandling="cooperative"
              disableDefaultUI={true}
            >
              {/* If placeType is lodging or not provided, show hotel markers; otherwise, show otherPlaces markers */}
              {(placeType === "lodging" || placeType === "") &&
                hotelsList.map((hotel, index) => {
                  const lat = hotel.location.latitude;
                  const lng = hotel.location.longitude;
                  return (
                    <Marker 
                      key={`hotel-${index}`} 
                      position={{ lat, lng }} 
                      label={{ text: hotel.name, color: "#79155B", fontSize: "18px" }}
                    />
                  );
                })
              }
              {(placeType && placeType !== "lodging") &&
                otherPlaces.map((place, index) => {
                  const lat = place.location.latitude;
                  const lng = place.location.longitude;
                  return (
                    <Marker 
                      key={`other-${index}`} 
                      position={{ lat, lng }} 
                      label={{ text: place.name, color: "#FF5733", fontSize: "18px" }}
                    />
                  );
                })
              }
            </Map>
          </APIProvider>
        </Maps>
        {/* Display itinerary response below the second map */}
        {itineraryResponse && (
          <Mapss ref={itineraryRef}>
            <ItineraryContainer>
              <h2>Your Itinerary</h2>
              <ReactMarkdown>{itineraryResponse}</ReactMarkdown>
              <DownloadButton onClick={downloadPDF}>Download PDF</DownloadButton>
            </ItineraryContainer>
          </Mapss>
        )}
        <ChatButton onClick={handleChatOpen}>Chat with Us</ChatButton>
      </Grid>
      <ItineraryButton onClick={handleItineraryOpen}>
        Plan Itinerary
      </ItineraryButton>
      {/* Chat Bot Dialog */}
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
      {/* Itinerary Dialog Form */}
      <Dialog open={itineraryOpen} onClose={handleItineraryClose}>
        <DialogTitle>Plan Your Itinerary</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="number"
            label="Number of Days"
            value={itineraryDays}
            onChange={(e) => setItineraryDays(e.target.value)}
            margin="dense"
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Choose a Hotel</InputLabel>
            <Select
              value={itineraryHotel}
              onChange={(e) => setItineraryHotel(e.target.value)}
              label="Choose a Hotel"
            >
              {hotelsList.map((hotel, index) => (
                <MenuItem key={index} value={hotel.name}>
                  {hotel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormGroup>
            <FormControlLabel 
              control={
                <Checkbox
                  checked={itineraryMeals.breakfast}
                  onChange={(e) => setItineraryMeals({ ...itineraryMeals, breakfast: e.target.checked })}
                />
              }
              label="Breakfast"
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={itineraryMeals.lunch}
                  onChange={(e) => setItineraryMeals({ ...itineraryMeals, lunch: e.target.checked })}
                />
              }
              label="Lunch"
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={itineraryMeals.dinner}
                  onChange={(e) => setItineraryMeals({ ...itineraryMeals, dinner: e.target.checked })}
                />
              }
              label="Dinner"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleItineraryClose} color="secondary">Close</Button>
          <Button onClick={handleItinerarySubmit} color="primary">Generate Itinerary</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const InputFields = ({ setMapUrl, setSpotsUrl, setCentral, setHotelsList, setVisitingSpots, setOtherPlaces, setPlaceType }) => {
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
    const formData = inputs.map(input => input.value).filter(value => value.trim() !== "");
    setFormData(formData);
    // Save the visiting spots for itinerary use
    setVisitingSpots(formData);
    
    const data = {
      places: formData,
      time: Date.now(),
      type: additionalInput.trim() !== "" ? additionalInput : null,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/submit", data);
      const mapURL = response.data.map;
      const spotsURL = response.data.spots;
      const hotelList = response.data.nearby_hotels;
      const center = response.data.central;
      // Get the other places list if available
      const otherPlaces = response.data.other_places || [];
      console.log("Map URL received:", mapURL);
      console.log("Spots URL received:", spotsURL);
      console.log("Hotel List:", hotelList);
      console.log("Other Places:", otherPlaces);
      setMapUrl(mapURL);
      setSpotsUrl(spotsURL);
      setCentral(center);
      setHotelsList(hotelList);
      setOtherPlaces(otherPlaces);
      // Also save the type in lowercase
      setPlaceType(additionalInput.trim().toLowerCase());
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

const DownloadButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: #218838;
  }
`;

const ItineraryButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  padding: 10px 20px;
  background-color: #a12280;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: rgb(255, 97, 0, 1);
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

const Maps = styled.div`
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

const Mapss = styled.div`
  height: auto;
  width: 100%;
  padding-top: 55px;
  margin-left: 10px;
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
  margin-top: 340vh;
`;

const ItineraryContainer = styled.div`
  width: 70vw;
  margin: 20px auto;
  padding: 20px;
  background-color: #a12280;
  border-radius: 10px;
  text-align: left;
  color: white;
  h1 {
    color: orange;
  }
`;

export default Planner;
  