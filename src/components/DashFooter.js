import React from 'react';
class DashFooter extends React.Component {
  render() {
    return (
      <section className='dashfooter'>
        <div className='dashfooter_div'>
          <span className='dashfooter_span'>{this.props.pageTitle}</span>
        </div>
      </section>
    )
  }
}

export default DashFooter;