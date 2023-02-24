import CardForm from '../components/CardForm';
import Card from '../components/Card';
import Top from '../components/Top';
import './AddCard.css';

function AddCard() {
  return (
    <div className="AddCard">
      <Top currentTitle={'ADD A NEW BANK CARD'} subTitle={'NEW CARD'} />
      <Card info={''} />
      <CardForm />
    </div>
  );
}

export default AddCard;