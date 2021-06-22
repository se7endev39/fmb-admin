import React from 'react';

import Header from '../components/Header';
import TodayDate from '../components/TodayDate';
import DashHeader from '../components/DashHeader';
import DashFooter from '../components/DashFooter';
import DashMain from '../components/DashMain';

class Home extends React.Component {
  render()  {
    return (  
      <div>
        <Header pageTitle=''/>
        <TodayDate />
        <DashHeader pageTitle='Total Thaalis'/>
        <DashMain />
        <DashFooter pageTitle='Thaalis by Zone'/>
      </div>
    );
  }
}

export default Home;