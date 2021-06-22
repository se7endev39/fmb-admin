import React from 'react';

import MenuItem from '../components/MenuItem';

class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'></h2>
        </div>
        <ul>
          <MenuItem link='/' linkText='Dashboard' />
          <MenuItem link='/profile' linkText='Home'  />
          <MenuItem link='/shop' linkText='Today Thaalis'  />
          <MenuItem link='/products' linkText='FeedBack'  />
          <MenuItem link='/orders' linkText='Users'  />
          <MenuItem link='/customers' linkText='Menu'  />
          <MenuItem link='/analytics' linkText='Calendar'  />
          <MenuItem link='/settings' linkText='Settings'  />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;