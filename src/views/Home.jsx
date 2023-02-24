import { json, Link } from 'react-router-dom';
import CardStack from '../components/CardStack';
import Top from '../components/Top';
import './Home.css';

if (!localStorage.firstRun) {
  localStorage.firstRun=true;
  localStorage.cardList = "[]";
  localStorage.activeCard=0;
}

function Home() {
  const cardList = JSON.parse(localStorage.cardList);
  const activeCard = JSON.parse(localStorage.activeCard);

  return (
    <div className="Home">
      <Top currentTitle={'E-WALLET'} subTitle={'ACTIVE CARD'} />
      <CardStack cardList={cardList} activeCard={activeCard} />
      <Link to="/addcard">
        <button>
          ADD A NEW CARD
        </button>
      </Link>
    </div>
  )
};

export default Home;