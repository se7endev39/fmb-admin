import React from 'react';
class TodayDate extends React.Component {
  constructor() {
    super();

    var today = new Date();
    var shortMonth = today.toLocaleString('en-us', { month: 'short' }); /* Jun */
    var date = '  Today: '+ shortMonth + ' ' + today.getDate() + ', ' + today.getFullYear()+'  ';
    this.state = {
        date: date
    };
}
  render() {
    return (
      <section className='todaydate'>
        <div className='todaydate_div'>
          <span className='todaydate_span'>{this.state.date}</span>
        </div>
      </section>
    )
  }
}

export default TodayDate;