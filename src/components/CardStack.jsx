import './CardStack.css';
import Card from './Card';
import { useState } from 'react';

function CardStack({cardList, activeCard}) {
  // const initCard = {
  //   number: '1234123412341234',
  //   cardholder: 'Marvan Al Kufai',
  //   valid: '12/23',
  //   ccv: '123',
  //   vendor: 'vendorNinja',
  //   chip: 'chipDark',
  // };

  // if (cardList.length === 0) {
  //   cardList.push(initCard);
  //   localStorage.cardList = JSON.stringify(cardList);
  // }

  const activeCardExist = JSON.parse(localStorage.activeCard);
  const [card, setCard] = useState(activeCard);

  return (
    <div className='CardStack'>
      <div className='CardStack-active'>
        {activeCardExist !== 0 && 
          <div>
            <button onClick={() => {
              const newCardList = cardList.filter((card) => card.number !== activeCardExist.number);
              localStorage.cardList = JSON.stringify(newCardList);
              localStorage.activeCard = 0; 
              window.location.reload();
            }}>
              DELETE CARD
            </button>
            <Card info={activeCardExist} />
          </div>
        }
      </div>
      {cardList.map((card, i) =>
        (card.number === activeCardExist.number) ? null :
        <div 
          key={card.number + Math.random()}
          onClick={() => { 
            setCard(card);
            localStorage.activeCard = JSON.stringify(card);
          }}
        >
          <Card info={card} />
        </div>
      )}
    </div>
  )
};

export default CardStack;