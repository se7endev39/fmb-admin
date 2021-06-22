import React from 'react';
class DashMain extends React.Component {
  render() {
    return (
      <section className='dashsecond'>
        <div className='dashsecond row'>
          <div className='col-sm-3'>
            <div className='dash_main_1 dash_main'>
              <p className='menu'>Size A: 35</p>
              <p className='menu_sub'>Without rice: 5</p>
              <p className='label'>Thaali</p>
              <p className='label'>Numbers</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='dash_main_2 dash_main'>
              <p className='menu'>Size B: 35</p>
              <p className='menu_sub'>Without rice: 5</p>
              <p className='label'>Thaali</p>
              <p className='label'>Numbers</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='dash_main_2 dash_main'>
              <p className='menu'>Size C: 20</p>
              <p className='menu_sub'>Without rice: 5</p>
              <p className='label'>Thaali</p>
              <p className='label'>Numbers</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='dash_main_2 dash_main'>
              <p className='menu'>Size D: 10</p>
              <p className='menu_sub'>Without rice: 5</p>
              <p className='label'>Thaali</p>
              <p className='label'>Numbers</p>
            </div>
          </div>
          </div>
      </section>
    )
  }
}

export default DashMain;