import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import wallet from '../../../public/icons/icon-Wallet.svg'

const Header = () => {
  return (
    <div>
      <Media
        queries={{
          small: '(max-width: 479px)',
          medium: '(min-width: 480px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {mathes => (
          <header>
            {mathes.small && (
              <div>
                <NavLink to="/home">
              <img src={wallet} alt="logo" />
              {/* <svg>
                <use href={wallet}></use>
              </svg> */}
                  <h1>Wallet</h1>
                </NavLink>
                <p>Name</p>
                <button></button>
              </div>
            )}
          </header>
        )}
      </Media>
    </div>
  );
};

export default Header;
