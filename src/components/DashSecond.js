import React from 'react';
import CountTo from 'react-count-to';
import firebase from 'firebase';
class DashSecond extends React.Component {
  
constructor(props) {
    
  super(props);
 
  this.state = {valueslist : []}
  }
  
componentDidMount() {
 
 
   
    firebase.database().ref("todaythaali").on("value", snapshot => {
      let valuelist = [];
      snapshot.forEach(snap => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          console.log(snap);
          valuelist.push(snap.val());
      });
      console.log(valuelist);
      console.log(valuelist[2]);
      this.setState({ valueslist: valuelist });
    });
  
  
}
  render() {
    return (
      <section className='dashthird'>
        <div className='dashthird row'>
          <div className='dash_rect_2'>
            <p className='number'><CountTo to={this.state.valueslist[2]} speed={1000} /></p>
            <p className='label'>Total registered thaali</p>
          </div>
          <div className='dash_rect_2'>
            <p className='number'><CountTo to={this.state.valueslist[1]} speed={1000} /></p>
            <p className='label'>Today’s Thaali</p>
          </div>
          <div className='dash_rect_3'>
            <div className='dash_rect_3_1'>
              <p className='label'>Today’s Thaali List</p>
            </div>
            <div className='dash_rect_3_1'>
              <p className='label'>Announcements</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DashSecond;