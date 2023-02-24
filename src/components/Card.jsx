import './Card.css';
import vendorBitcoin from '../assets/vendor-bitcoin.svg';
import vendorEvil from '../assets/vendor-evil.svg';
import vendorNinja from '../assets/vendor-ninja.svg';
import vendorBlockchain from '../assets/vendor-blockchain.svg';
import chipDark from '../assets/chip-dark.svg';

function Card({info}) {
  function getVendor() {
    switch (info.vendor) {
      case 'vendorBitcoin':
        return vendorBitcoin;
      case 'vendorEvil':
        return vendorEvil;
      case 'vendorNinja':
        return vendorNinja;
      case 'vendorBlockchain':
        return vendorBlockchain;
      default:
        return vendorBitcoin;
    }
  }

  function getColor() {
    switch (info.vendor) {
      case 'vendorBitcoin':
        return 'Card Card-bitcoin';
      case 'vendorEvil':
        return 'Card Card-evil';
      case 'vendorNinja':
        return 'Card Card-ninja';
      case 'vendorBlockchain':
        return 'Card Card-blockchain';
      default:
        return 'Card Card-bitcoin';
    }
  }

  return (
    <div className={getColor()}>
      <div className="Card__top">
        <img className="Card__topleft-chip" src={chipDark} alt="chip" />
        <img className="Card__topright-vendor" src={getVendor()} alt="vendor" />
      </div>
      <div className='Card__middle'>
        <p className="Card__middle-number">{info.number?.match(/\d{4}/g).join(" ")}</p>
      </div>
      <div className="Card__bottom">
        <div className="Card__bottomleft">
          <p className="Card__bottomleft-label">CARDHOLDER NAME</p>
          <p className="Card__bottomleft-name">{info.cardholder}</p>
        </div>
        <div className="Card__bottomright">
          <p className="Card__bottomright-label">VALID THRU</p>
          <p className="Card__bottomright-number">{info.valid}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;