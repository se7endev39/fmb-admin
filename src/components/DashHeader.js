import React from 'react';
class DashHeader extends React.Component {
  render() {
    return (
      <section className='dashheader'>
        <div className='dashheader_div'>
          <span className='dashheader_span'>{this.props.pageTitle}</span>
        </div>
      </section>
    )
  }
}

export default DashHeader;