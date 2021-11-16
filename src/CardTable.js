import Card from "./Card";
import {useState, useRef, useEffect} from 'react'; 
import axios from "axios";

const API_ENDPOINT = "http://deckofcardsapi.com/api/deck";

const CardTable = () => {
  // On first render, make call to Deck of Cards API for this component's deck ID
  const deckID = useRef();
  useEffect(() => {
    axios.get(`${API_ENDPOINT}/new/shuffle`)
    .then( res => {
      deckID.current = res.data.deck_id;
    });
  }, []);
  return (<div>
    <button>Draw Card (0 remaining)</button>
    <Card src="http://deckofcardsapi.com/static/img/KH.png"/>
  </div>)
};

export default CardTable