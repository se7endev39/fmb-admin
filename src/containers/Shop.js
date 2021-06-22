import React from 'react';

import Header from '../components/Header';
import TodayDate from '../components/TodayDate';
import DashHeader from '../components/DashHeader';
import DashFooter from '../components/DashFooter';
import DashThaalisMain from '../components/DashThaalisMain';

class Thaalis extends React.Component {
  render()  {
    return (  
      <div>
        <Header pageTitle=''/>
        <TodayDate />
        <DashHeader pageTitle='Thaalis by Zone/Mohalla'/>
        <DashThaalisMain />
        <DashFooter pageTitle='Total Thaalis'/>
      </div>
    );
  }
}

export default Thaalis;