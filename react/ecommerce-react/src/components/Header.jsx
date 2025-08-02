import { useEffect, useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

function Header() {
  const onlineStatus = useOnlineStatus();
  // let btnValue = 'Login';
  const [btnValue, setBtnValue] = useState('Login');
  const [btnValue2, setBtnValue2] = useState('2nd Button');

  function handleButtonClick() {
    btnValue === 'Login' ? setBtnValue('Logout') : setBtnValue('Login');
  }

  function handleButton2Click() {
    btnValue2 === '2nd Button'
      ? setBtnValue2('Blah')
      : setBtnValue2('2nd Button');
  }

  console.log('Hello, I am inside Header component');

  useEffect(() => {
    console.log('Hello, I am inside useEffect()');
  }, [btnValue, btnValue2]);

  useEffect(() => {
    console.log('Hello, I am inside useEffect() with dependency');
  }, []);

  return (
    <header>
      <div className='logo'>E-commerce App</div>

      <div>
        <nav>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='/'>Home</a>
            </li>
            <li className='menu-item'>
              <a href='/men'>Men</a>
            </li>
            <li className='menu-item'>
              <a href='/women'>Women</a>
            </li>
            <li className='menu-item'>
              <a href='/kids'>Kids</a>
            </li>
            <li className='menu-item'>
              <a href='/accessories'>Accessories</a>
            </li>
            <li className='menu-item'>
              <a href='/sale'>Sale</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header-right'>
        <input type='search' placeholder='Search for products...' />
        <button onClick={handleButtonClick} className='login-btn'>
          {btnValue}
        </button>
        <button onClick={handleButton2Click} className='login-btn'>
          {onlineStatus ? 'Online' : 'Offline'}
        </button>
      </div>
    </header>
  );
}

export default Header;
