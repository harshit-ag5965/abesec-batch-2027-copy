function Header() {
  return (
    <header>
      <div className='logo'>E-commerce App</div>

      <div>
        <nav>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='/home'>Home</a>
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
        <button className='login-btn'>Login</button>
      </div>
    </header>
  );
}

export default Header;
