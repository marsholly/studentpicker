import React from 'react';
import AddStudents from './addStudents';
import PickOne from './pickOne';

const App = React.createClass({
  render(){
    return (
      <div className = 'container'>
        <div className ='row'>
          <AddStudents />
        </div>
      </div>
    )
  }
})

export default App;
