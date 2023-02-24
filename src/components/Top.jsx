import './Top.css';
import { Link } from 'react-router-dom';

function Top({currentTitle, subTitle}) {
  return (
    <div>
      <h1>{currentTitle}</h1>
      <p>{subTitle}</p>
      {currentTitle !== 'E-WALLET' &&
        <Link to="/">
          <button>
            GO BACK
          </button>
        </Link>
      }
    </div>
  );
}

export default Top;