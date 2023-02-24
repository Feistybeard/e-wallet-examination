import './CardForm.css';
import { Link } from 'react-router-dom';

function CardForm() {
  const addCard = () => {
    const cardList = JSON.parse(localStorage.cardList);
    let number = document.querySelector('.cardNumber').value;
    let cardholder = document.querySelector('.cardHolder').value;
    let valid = document.querySelector('.valid').value;
    let ccv = document.querySelector('.ccv').value;
    let vendor = document.querySelector('.vendor').value;
    
    if (number.length !== 16) {
      alert('Enter valid card number');
      return;
    }
    if (cardholder.length === 0) {
      alert('Enter valid cardholder name');
      return;
    }
    if (valid.length !== 5) {
      alert('Enter valid date');
      return;
    }
    if (ccv.length !== 3) {
      alert('Enter valid ccv');
      return;
    }

    let card = {
      number: number,
      cardholder: cardholder,
      valid: valid,
      ccv: ccv,
      vendor: vendor,
      chip: 'chipDark',
    } 
   
    cardList.push(card);
    localStorage.cardList = JSON.stringify(cardList);
  }

  return (
    <div className="CardForm">
      <form>
        <label>
          CARDNUMBER
          <input type='tel' className='cardNumber' name='cardNumber' maxLength='16' placeholder='xxxxxxxxxxxxxxxx(16 digit)' />
        </label>
        <label>
          CARDHOLDER NAME
          <input type='text' className='cardHolder' placeholder='FIRSTNAME LASTNAME' />
        </label>
        <label>
          VAILD THRU
          <input type='text' className='valid' name='valid' maxLength='5' placeholder='xx/xx' />
        </label>
        <label>
          CCV
          <input type='tel' className='ccv' name='ccv' maxLength='3' placeholder='xxx' />
        </label>
        <label>
          VENDOR
          <select className='vendor'>
            <option value='vendorBitcoin'>BITCOIN INC</option>
            <option value='vendorNinja'>NINJA BANK</option>
            <option value='vendorBlockchain'>BLOCK CHAIN INC</option>
            <option value='vendorEvil'>EVIL CORP</option>
          </select>
        </label>
      </form>
      <Link to="/">
        <button onClick={addCard}>
          ADD CARD
        </button>
      </Link>
    </div>
  )   
}

export default CardForm;