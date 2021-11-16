import Card from "./Card";
import {useState, useRef, useEffect} from 'react'; 
import axios from "axios";

const API_ENDPOINT = "http://deckofcardsapi.com/api/deck";

const CardTable = () => {
  const [cards, setCards] = useState([]);
  const deckID = useRef();
  const deckSize = useRef();

  // On first render, make call to Deck of Cards API for this component's deck ID
  useEffect(() => {
    axios.get(`${API_ENDPOINT}/new/shuffle`)
    .then( res => {
      deckID.current = res.data.deck_id;
      deckSize.current = res.data.remaining;
    });
  }, []);
  
  const drawCard = () => {
    if (deckSize.current < 1){
      alert("Error: no cards remaining!");
      return;
    }

    axios.get(`${API_ENDPOINT}/${deckID.current}/draw/?count=1`)
    .then( res => {
      deckSize.current = res.data.remaining;
      const card = res.data.cards[0];
      const updated = [...cards];
      updated.push({ 
        src: card.image, alt: `${card.value} of ${card.suit}`,
        id: `${card.code}-${deckID.current}`, rotation: Math.random()
      });
      setCards(updated);
    });
  };
  
  return (<div>
    <button onClick={drawCard}>Draw Card ({deckSize.current || 52} remaining)</button>
    <div>
    {cards.map(
      (card, idx) => {
        return <Card src={card.src} key={card.id} alt={card.alt} index={idx} rotation={card.rotation} />
      }
    )}
    </div>
  </div>)
};

export default CardTable