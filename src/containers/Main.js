import React from 'react';

import Header from '../components/Header';
import TodayDate from '../components/TodayDate';
import DashSecond from '../components/DashSecond';
import DashThird from '../components/Dashthird';

class Main extends React.Component {
  render()  {
    return (  
      <div>
        <Header pageTitle=''/>
        <TodayDate />
        <DashSecond />
        <DashThird />
      </div>
    );
  }
}

export default Main;